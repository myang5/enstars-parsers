import {
  isNameLineException,
  isImageURLLine,
  isHeadingLine,
  splitLineIntoLabelAndValue,
  isNameLine,
} from '@utils';

/**
 * Helper function for convertText that formats each dialogue line.
 */
export const formatLine = (TEMPLATES) => {
  // Handle both dialogue formats where name is on every line
  // or only on first line
  let currentName = '';
  let shouldAddNameToAraDialogueLine = false;

  return (p) => {
    let line = p.textContent.replace(/&nbsp;/g, ' ').trim();

    if (!line || isJapaneseLine(line)) {
      return '';
    }

    // Because end result should be in HTML as well,
    // use innerHTML to preserve styling
    line = p.innerHTML.replace(/&nbsp;/g, ' ').trim();

    if (isHeadingLine(line)) {
      return TEMPLATES.blockquote(line);
    }

    if (isImageURLLine(line)) {
      currentName = '';
      return TEMPLATES.image(line);
    }

    /**
     * Jay sometimes works with a translator that formats lines like this:
     *
     * Nazuna:
     * 何だその曰くありげな物件。だ、大丈夫なのか？
     * That sure sounds specific?! I-Is he okay?
     *
     * Once a dialogue line without a name label is found after a line
     * that was just the name label, the full "line" has been processed.
     *
     * After full line is processed, treat
     */
    if (isAraNameLine(line) && !isNameLineException(line)) {
      const [name] = splitLineIntoLabelAndValue(line);
      shouldAddNameToAraDialogueLine = currentName !== name;
      currentName = name;
      return '';
    }

    if (isNameLine(line) && !isNameLineException(line)) {
      const [name, dialogue] = splitLineIntoLabelAndValue(line);

      // Handle case where name is on every dialogue line
      if (currentName === name) {
        return TEMPLATES.dialogue(dialogue);
      }

      currentName = name;

      let result = '';
      result += TEMPLATES.boldName(currentName);
      result += dialogue;
      return TEMPLATES.dialogue(result);
    }

    // Handle case where name is not on every dialogue line
    if (currentName) {
      if (shouldAddNameToAraDialogueLine) {
        let result = '';
        result += TEMPLATES.boldName(currentName);
        result += line;
        return TEMPLATES.dialogue(result);
      }
      return TEMPLATES.dialogue(line);
    }

    return '';
  };
};

export const isJapaneseLine = (line) =>
  /[一-龠ぁ-ゔァ-ヴーａ-ｚＡ-Ｚ０-９々〆〤、-〻！-～]/.test(line);

// Line that only contains a name label like "Nazuna:"
const isAraNameLine = (line) => /\w+:$/.test(line.trim());

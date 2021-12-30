import { isNameLineException } from '@utils';
import { chain } from 'lodash';

/**
 * Helper function for convertText that formats each dialogue line.
 * @param {object} TEMPLATES
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

    if (isInfoLine(line)) {
      return TEMPLATES.info(line);
    }

    // Because end result should be in HTML as well,
    // use innerHTML to preserve styling
    line = p.innerHTML.replace(/&nbsp;/g, ' ').trim();

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
      const [name] = splitLineIntoNameAndDialogue(line);
      shouldAddNameToAraDialogueLine = currentName !== name;
      currentName = name;
      return '';
    }

    if (isNameLine(line) && !isNameLineException(line)) {
      const [name, dialogue] = splitLineIntoNameAndDialogue(line);

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

export const isInfoLine = (line) => line.startsWith('[');

export const isNameLine = (line) => {
  if (!line.includes(':')) {
    return false;
  }

  const hasNoLabel =
    chain(line)
      .split(':')
      .map((part) => part.trim())
      .compact()
      .value().length < 2;
  if (hasNoLabel) {
    return false;
  }

  const hasRandomColon =
    chain(line).split(':').first().trim()?.split(' ').value().length > 1;
  if (hasRandomColon) {
    return false;
  }

  return true;
};

// Line that only contains a name label like "Nazuna:"
const isAraNameLine = (line) => /\w+:$/.test(line.trim());

export const splitLineIntoNameAndDialogue = (line) => {
  // Use rest operator in case dialogue also contains colons
  const [name, ...dialogue] = line.split(':');
  return [name.trim(), dialogue.join(':').trim()];
};

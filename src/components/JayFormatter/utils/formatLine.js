import { chain } from 'lodash';

/**
 * Helper function for convertText that formats each dialogue line.
 * @param {object} TEMPLATES
 */

export const formatLine = (TEMPLATES) => {
  // Handle both dialogue formats where name is on every line
  // or only on first line
  let currentName = '';
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

    if (isNameLine(line)) {
      const [name, dialogue] = splitLineIntoNameAndDialogue(line);

      // Handle case where name is on every dialogue line
      if (currentName === name) {
        return TEMPLATES.dialogue(dialogue);
      }

      let result = '';
      currentName = name;
      result += TEMPLATES.boldName(name);
      result += dialogue;
      return TEMPLATES.dialogue(result);
    }

    // Handle case where name is not on every dialogue line
    if (currentName) {
      return TEMPLATES.dialogue(line);
    }

    return '';
  };
};

export const isJapaneseLine = (line) =>
  /[一-龠ぁ-ゔァ-ヴーａ-ｚＡ-Ｚ０-９々〆〤、-〻！-～]/.test(line);
export const isInfoLine = (line) => line.startsWith('[');
export const isNameLine = (line) => {
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

export const splitLineIntoNameAndDialogue = (line) => {
  // Use rest operator in case dialogue also contains colons
  const [name, ...dialogue] = line.split(':');
  return [name.trim(), dialogue.join(':').trim()];
};

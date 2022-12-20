import {
  isFileNameLine,
  isNameLineException,
  isNameLine,
  isHeadingLine,
  splitLineIntoLabelAndValue,
} from '@utils';

/**
 * Helper function for convertText that formats each dialogue line.
 */
export const formatLine = (templates) => {
  // Handle both dialogue formats where name is on every line
  // or only on first line
  let currentName = '';

  return (p) => {
    // textContent ignores HTML styling
    let line = p.textContent.replace(/&nbsp;/g, ' ').trim();

    if (!line) {
      return '';
    }

    if (isHeadingLine(line)) {
      return templates.heading(line);
    }

    if (isFileNameLine(line)) {
      currentName = '';
      return templates.cgRender(line);
    }

    // Because end result should be in HTML as well,
    // use innerHTML to preserve styling
    line = p.innerHTML.replace(/&nbsp;/g, ' ').trim();

    if (isNameLine(line) && !isNameLineException(line)) {
      const [name, dialogue] = splitLineIntoLabelAndValue(line);
      let result = '';

      // Handle case where name is on every dialogue line
      if (currentName !== name) {
        currentName = name;
        result += templates.dialogueRender(name);
      }

      result += templates.dialogue(dialogue);
      return result;
    }

    // Handle case where name is not on every dialogue line
    return templates.dialogue(line);
  };
};

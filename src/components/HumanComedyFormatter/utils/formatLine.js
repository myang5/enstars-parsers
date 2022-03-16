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

  return (p) => {
    let line = p.textContent.replace(/&nbsp;/g, ' ').trim();

    if (!line) {
      return '';
    }

    // Because end result should be in HTML as well,
    // use innerHTML to preserve styling
    line = p.innerHTML.replace(/&nbsp;/g, ' ').trim();

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
      return TEMPLATES.dialogue(line);
    }

    return '';
  };
};

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

export const splitLineIntoNameAndDialogue = (line) => {
  // Use rest operator in case dialogue also contains colons
  const [name, ...dialogue] = line.split(':');
  return [name.trim(), dialogue.join(':').trim()];
};

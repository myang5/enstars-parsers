import { chain } from 'lodash';
import {
  isNameLineException,
  boldMarkdownToHTML,
  italicMarkdownToHTML,
} from '@utils';

/**
 * Helper function for convertText that formats each dialogue line.
 */
export const formatLines = ({ templates, input }) => {
  let headerImage = '';
  let headerQuote = '';
  let storyOutput = '';

  // Handle both dialogue formats where name is on every line
  // or only on first line
  let currentName = '';

  const formatLine = (p) => {
    let line = p.textContent.replace(/&nbsp;/g, ' ').trim();

    if (!line) {
      return;
    }

    // Because end result should be in HTML as well,
    // use innerHTML to preserve styling
    line = p.innerHTML.replace(/&nbsp;/g, ' ').trim();

    if (isImageLine(line)) {
      const result = templates.image(line);
      if (!headerImage) {
        headerImage = result;
      } else {
        storyOutput += result;
      }
      return;
    }

    if (isLabelLine(line) && !isNameLineException(line)) {
      const [name, dialogue] = splitLineIntoNameAndDialogue(line);

      const formattedDialogue = italicMarkdownToHTML(
        boldMarkdownToHTML(dialogue),
      );

      // Handle case where name is on every dialogue line
      if (currentName === name) {
        storyOutput += templates.dialogue(formattedDialogue);
        return;
      }

      currentName = name;

      let result = '';
      result += templates.boldName(currentName);
      result += formattedDialogue;
      storyOutput += templates.dialogue(result);

      if (isCharacterNameLabel(name) && !headerQuote) {
        headerQuote = templates.dialogue(result);
      }

      return;
    }

    // Handle case where name is not on every dialogue line
    if (currentName) {
      storyOutput += templates.dialogue(line);
      return;
    }

    return '';
  };

  for (let i = 0; i < input.length; i++) {
    formatLine(input[i]);
  }

  return { headerImage, headerQuote, storyOutput };
};

const isImageLine = (line) => {
  return line.toUpperCase().startsWith('HTTP');
};

const isLabelLine = (line) => {
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

const splitLineIntoNameAndDialogue = (line) => {
  // Use rest operator in case dialogue also contains colons
  const [name, ...dialogue] = line.split(':');
  return [name.trim(), dialogue.join(':').trim()];
};

const isCharacterNameLabel = (name) =>
  [
    'nazuna',
    'mika',
    'shu',
    'hajime',
    'tomoya',
    'mitsuru',
    'arashi',
    'kuro',
  ].includes(name.toLowerCase());

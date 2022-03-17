import { chain } from 'lodash';
import {
  isNameLineException,
  boldMarkdownToHTML,
  italicMarkdownToHTML,
  isImageURLLine,
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

  const formatLine = (p, i) => {
    let line = p.textContent.replace(/&nbsp;/g, ' ').trim();

    if (!line) {
      return;
    }

    // Because end result should be in HTML as well,
    // use innerHTML to preserve styling
    line = p.innerHTML.replace(/&nbsp;/g, ' ').trim();

    if (isImageURLLine(line)) {
      const result = templates.image(line);
      if (i === 0 && !headerImage) {
        headerImage = result;
      } else {
        storyOutput += result;
      }
      currentName = '';
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

      // Informational lines such as Location: or Heading:
      if (isLabelLineNeedingBlockquote(line)) {
        storyOutput += templates.blockquote(templates.dialogue(result).trim());
        return;
      }

      storyOutput += templates.dialogue(result);

      if (isCharacterNameLabel(name) && !headerQuote) {
        headerQuote = templates.blockquote(templates.dialogue(result).trim());
      }

      return;
    }

    // Handle case where name is not on every dialogue line
    if (currentName) {
      storyOutput += templates.dialogue(line);
      return;
    }
  };

  for (let i = 0; i < input.length; i++) {
    formatLine(input[i], i);
  }

  return { headerImage, headerQuote, storyOutput };
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

const isLabelLineNeedingBlockquote = (line) =>
  ['location', 'heading'].includes(line.split(':')[0].trim().toLowerCase());

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

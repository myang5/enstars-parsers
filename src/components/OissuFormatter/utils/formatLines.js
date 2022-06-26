import {
  isNameLineException,
  boldMarkdownToHTML,
  italicMarkdownToHTML,
  isImageURLLine,
  isOissuNarratedLine,
  splitLineIntoLabelAndValue,
  isOissuLabelLine,
} from '@utils';

/**
 * Helper function for convertText that formats each dialogue line.
 */
export const formatLines = ({ TEMPLATES, input }) => {
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
      const result = TEMPLATES.image(line);
      if (i === 0 && !headerImage) {
        headerImage = result;
      } else {
        storyOutput += result;
      }
      currentName = '';
      return;
    }

    if (isOissuLabelLine(line) && !isNameLineException(line)) {
      const [name, dialogue] = splitLineIntoLabelAndValue(line);

      const formattedDialogue = italicMarkdownToHTML(
        boldMarkdownToHTML(dialogue),
      );

      if (isOissuNarratedLine(line)) {
        storyOutput += TEMPLATES.blockquote(
          TEMPLATES.dialogue(`${name}: ${formattedDialogue}`).trim(),
        );
        return;
      }

      // Handle case where name is on every dialogue line
      if (currentName === name) {
        storyOutput += TEMPLATES.dialogue(formattedDialogue);
        return;
      }

      currentName = name;

      let result = '';
      result += TEMPLATES.boldName(currentName);
      result += formattedDialogue;

      storyOutput += TEMPLATES.dialogue(result);

      if (!headerQuote) {
        headerQuote = TEMPLATES.blockquote(TEMPLATES.dialogue(result).trim());
      }

      return;
    }

    // Handle case where name is not on every dialogue line
    if (currentName) {
      storyOutput += TEMPLATES.dialogue(line);
      return;
    }
  };

  for (let i = 0; i < input.length; i++) {
    formatLine(input[i], i);
  }

  return { headerImage, headerQuote, storyOutput };
};

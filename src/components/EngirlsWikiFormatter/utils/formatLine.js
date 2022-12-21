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
    // First evaluate line without dealing with styling
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

    console.log(p);

    // Retrieve original styling for dialogue
    line = formatStyling(p, templates);
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

const formatStyling = (p, templates) => {
  p.querySelectorAll('strong').forEach((elt) => {
    elt.replaceWith(templates.boldText(elt.textContent));
  });
  p.querySelectorAll('b').forEach((elt) => {
    elt.replaceWith(templates.boldText(elt.textContent));
  });
  p.querySelectorAll('emphasis').forEach((elt) => {
    elt.replaceWith(templates.italicText(elt.textContent));
  });
  p.querySelectorAll('i').forEach((elt) => {
    elt.replaceWith(templates.italicText(elt.textContent));
  });
  p.querySelectorAll('a').forEach((elt) => {
    elt.replaceWith(templates.link(elt.href, elt.textContent));
  });
  return p;
};

import {
  convertEditorDataToDom,
  extractBr,
  isHeadingLine,
  isNameLine,
  isNameLineException,
  splitLineIntoLabelAndValue,
} from '@utils';

/**
 * Get the names of the characters in the current dialogue in InputArea component.
 * Used as a callback to the Autosave plugin of the InputEditor.
 * @param editorData The CKEditor data as a string (returned from CKEditor.getData())
 * @return {object} An object with the names of the characters initialized
 * with an empty string value
 */
export const getNamesInDialogue = (editorData) => {
  const inputDom = extractBr(convertEditorDataToDom(editorData));
  const lines = Array.from(
    inputDom.querySelectorAll('p'),
    (p) => p.textContent,
  );
  const names = {};
  lines.forEach((line) => {
    if (
      isNameLine(line) &&
      !isNameLineException(line) &&
      !isHeadingLine(line)
    ) {
      const [name] = splitLineIntoLabelAndValue(line);
      names[name] = '';
    }
  });
  return names;
};

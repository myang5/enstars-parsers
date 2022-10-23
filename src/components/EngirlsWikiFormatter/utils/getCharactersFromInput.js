import {
  extractBr,
  convertEditorDataToDom,
  isOissuNarratedLine,
  splitLineIntoLabelAndValue,
  isOissuLabelLine,
} from '@utils';
import { isJapaneseLine } from './formatLine';

export const getCharactersFromInput = (editor) => {
  const inputDom = extractBr(convertEditorDataToDom(editor.getData()));
  const input = inputDom.querySelectorAll('p');
  const charactersSet = new Set();

  for (let i = 0; i < input.length; i++) {
    const p = input[i];
    const line = p.textContent.replace(/&nbsp;/g, ' ').trim();
    if (isJapaneseLine(line) || isOissuNarratedLine(line)) {
      continue;
    }
    if (isOissuLabelLine(line)) {
      const [name] = splitLineIntoLabelAndValue(line);
      charactersSet.add(name);
    }
  }

  const characters = [...charactersSet].join(', ');
  return characters;
};

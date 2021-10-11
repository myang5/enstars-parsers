import { extractBr, convertEditorDataToDom } from '@utils';
import {
  isInfoLine,
  isJapaneseLine,
  isNameLine,
  splitLineIntoNameAndDialogue,
} from './formatLine';

export const getCharactersFromInput = (editor) => {
  const inputDom = extractBr(convertEditorDataToDom(editor.getData()));
  const input = inputDom.querySelectorAll('p');
  const charactersSet = new Set();

  for (let i = 0; i < input.length; i++) {
    const p = input[i];
    const line = p.textContent.replace(/&nbsp;/g, ' ').trim();
    if (isJapaneseLine(line) || isInfoLine(line)) {
      continue;
    }
    if (isNameLine(line)) {
      const [name] = splitLineIntoNameAndDialogue(line);
      charactersSet.add(name);
    }
  }

  const characters = [...charactersSet].join(', ');
  return characters;
};

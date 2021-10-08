import extractBr from '@utils/extractBr';
import convertEditorDataToDom from '@utils/convertEditorDataToDom';
import formatLine from './formatLine';

/**
 * Formats text into source code for the wiki.
 * @return {string} The formatted text as a string to be placed in the output textarea
 */

export default function convertText({ inputData }) {
  const inputDom = extractBr(convertEditorDataToDom(inputData));
  const input = inputDom.querySelectorAll('p');
  const formatLineHelper = formatLine();

  let output = '';
  for (let i = 0; i < input.length; i++) {
    output += formatLineHelper(input[i]);
  }
  return output;
}
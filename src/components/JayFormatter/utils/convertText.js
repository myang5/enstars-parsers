import { extractBr, convertEditorDataToDom, updateLocalStorage } from '@utils';
import { Formatters } from '@constants';
import formatLine from './formatLine';
import { NAV_KEYS } from './nav_keys';

/**
 * Formats text into source code for the wiki.
 * @return {string} The formatted text as a string to be placed in the output textarea
 */

export function convertText({ inputData, nav }) {
  const TEMPLATES = getTemplates();
  const inputDom = extractBr(convertEditorDataToDom(inputData));
  updateLocalStorage({
    formatter: Formatters.JayFormatter,
    key: 'nav',
    value: nav,
  });

  const input = inputDom.querySelectorAll('p');
  let output = '';

  const formatLineHelper = formatLine(TEMPLATES);

  for (let i = 0; i < input.length; i++) {
    output += formatLineHelper(input[i]);
  }

  output += formatNavBar(nav);
  return output;
}

const getTemplates = () => {
  const templates = {};

  templates.dialogue = (value) => `<p>${value}</p>\n`;
  templates.boldName = (value) => `<strong>${value}:</strong> `;

  templates.info = (value) => `<p><strong><i>${value}</i></strong></p>\n`;

  return templates;
};

const formatNavBar = (nav) => {
  let output = '<p>✦✦✦✦✦</p>\n<p>';
  if (nav[NAV_KEYS.PREV_URL]) {
    output += `<a href="${nav[NAV_KEYS.PREV_URL]}">← prev</a> `;
  }
  output += `✦ <a href="${nav[NAV_KEYS.ALL_URL]}">all</a> ✦`;
  if (nav[NAV_KEYS.NEXT_URL]) {
    output += ` <a href="${nav[NAV_KEYS.NEXT_URL]}">next →</a>`;
  }
  output += '</p>\n';
  return output;
};

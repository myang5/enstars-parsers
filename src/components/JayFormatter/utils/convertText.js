import { mapValues } from 'lodash';
import { extractBr, convertEditorDataToDom, updateLocalStorage } from '@utils';
import { Formatters } from '@constants';
import { formatLine } from './formatLine';
import { NAV_KEYS } from './nav_keys';
import { DETAILS_KEYS } from './details_keys';
import { formatHeader } from './formatHeader';

export function convertText({
  inputData,
  blockquoteData,
  nav,
  details,
  characters,
  jpProofreaders,
  engProofreaders,
  translators,
}) {
  nav = normalizeValues(nav);
  updateLocalStorage({
    formatter: Formatters.JayFormatter,
    key: 'nav',
    value: nav,
  });

  details = normalizeValues(details);
  updateLocalStorage({
    formatter: Formatters.JayFormatter,
    key: 'details',
    value: details,
  });

  jpProofreaders = normalizeStaff(jpProofreaders);
  updateLocalStorage({
    formatter: Formatters.JayFormatter,
    key: 'jpProofreaders',
    value: jpProofreaders,
  });

  engProofreaders = normalizeStaff(engProofreaders);
  updateLocalStorage({
    formatter: Formatters.JayFormatter,
    key: 'engProofreaders',
    value: engProofreaders,
  });

  translators = normalizeStaff(translators);
  updateLocalStorage({
    formatter: Formatters.JayFormatter,
    key: 'translators',
    value: translators,
  });

  const blockquoteDom = extractBr(convertEditorDataToDom(blockquoteData));
  const blockquote = blockquoteDom.querySelectorAll('p');

  const TEMPLATES = getTemplates();

  let output = formatHeader({
    details,
    characters,
    jpProofreaders,
    engProofreaders,
    translators,
    blockquote,
  });
  output += TEMPLATES.oissuOpen();

  const inputDom = extractBr(convertEditorDataToDom(inputData));
  const input = inputDom.querySelectorAll('p');
  const formatLineHelper = formatLine(TEMPLATES);

  for (let i = 0; i < input.length; i++) {
    output += formatLineHelper(input[i]);
  }

  output += TEMPLATES.oissuClose();
  output += formatNavBar(nav);
  return output;
}

export const getTemplates = () => {
  const templates = {};

  templates.dialogue = (value) => `<p>${value}</p>\n`;
  templates.boldName = (value) => `<strong>${value}:</strong> `;
  templates.info = (value) => `<p><strong><i>${value}</i></strong></p>\n`;

  templates.image = (value) => `<img src="${value}">\n`;

  templates.separator = () => `<p>✦✦✦✦✦</p>\n`;

  templates.oissuOpen = () => `<div class="oissu">\n`;
  templates.oissuClose = () => `</div>\n`;

  return templates;
};

const normalizeValues = (object) => mapValues(object, (value) => value.trim());
const normalizeStaff = (staff) =>
  staff
    .filter((person) => person[DETAILS_KEYS.NAME])
    .map((person) => normalizeValues(person));

const formatNavBar = (nav) => {
  const TEMPLATES = getTemplates();
  let output = `${TEMPLATES.separator()}<p>`;
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

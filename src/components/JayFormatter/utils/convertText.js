import { extractBr, convertEditorDataToDom, updateLocalStorage } from '@utils';
import { Formatters } from '@constants';
import formatLine from './formatLine';
import { NAV_KEYS } from './nav_keys';
import { DETAILS_KEYS } from '.';
import { compact, mapValues } from 'lodash';

/**
 * Formats text into source code for the wiki.
 * @return {string} The formatted text as a string to be placed in the output textarea
 */

export function convertText({
  inputData,
  blockquoteData,
  nav,
  details,
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

  const TEMPLATES = getTemplates();
  const inputDom = extractBr(convertEditorDataToDom(inputData));
  const blockquoteDom = extractBr(convertEditorDataToDom(blockquoteData));
  const input = inputDom.querySelectorAll('p');
  const blockquote = blockquoteDom.querySelectorAll('p');

  let output = formatHeader({
    details,
    jpProofreaders,
    engProofreaders,
    translators,
    blockquote,
  });

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

const normalizeValues = (object) => mapValues(object, (value) => value.trim());
const normalizeStaff = (staff) =>
  staff
    .filter((person) => person[DETAILS_KEYS.NAME])
    .map((person) => normalizeValues(person));

const getLink = (href, text) => `<a href="${href}">${text}</a>`;
const joinStaff = (staff, separator) =>
  staff
    .map((person) =>
      person[DETAILS_KEYS.LINK]
        ? getLink(person[DETAILS_KEYS.LINK], person[DETAILS_KEYS.NAME])
        : person[DETAILS_KEYS.NAME],
    )
    .join(separator);
const formatHeader = ({
  details,
  jpProofreaders,
  engProofreaders,
  translators,
  blockquote,
}) => {
  const jpProofreading = joinStaff(jpProofreaders, ' + ');
  const fullJpProofreading = jpProofreading ? jpProofreading + ' (JP)' : '';
  const engProofreading = joinStaff(engProofreaders, ' + ');
  const fullEngProofreading = engProofreading ? engProofreading + ' (ENG)' : '';
  const translation = joinStaff(translators, ' & ');

  const proofreadingLine =
    jpProofreading || engProofreading
      ? `\n<p><b>Proofreading:</b> ${compact([
          fullJpProofreading,
          fullEngProofreading,
        ]).join(' &amp; ')}</p>`
      : '';

  let blockquoteOutput = '';

  const TEMPLATES = getTemplates();
  const formatLineHelper = formatLine(TEMPLATES);
  for (let i = 0; i < blockquote.length; i++) {
    blockquoteOutput += formatLineHelper(blockquote[i]);
  }

  // Entire blockquote should be italicized
  blockquoteOutput = blockquoteOutput.replace(/(<p>)/, '$1<i>');
  blockquoteOutput = blockquoteOutput.replace(/(<\/p>)/, '</i>$1');

  return `<p><b>Writer:</b> ${details[DETAILS_KEYS.WRITER]}</p>
<p><b>Season:</b> ${details[DETAILS_KEYS.SEASON]}</p>
<p><b>Characters:</b> ${details[DETAILS_KEYS.CHARACTERS]}</p>${proofreadingLine}
<p><b>Translation:</b> ${translation}</p>
<blockquote>${blockquoteOutput.trim()}</blockquote>
[[MORE]]
`;
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

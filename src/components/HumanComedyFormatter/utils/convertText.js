import { mapValues } from 'lodash';
import { extractBr, convertEditorDataToDom, updateLocalStorage } from '@utils';
import { Formatters } from '@constants';
import { formatLine } from './formatLine';
import { NAV_KEYS } from './nav_keys';
import { DETAILS_KEYS } from './details_keys';

export function convertText({ inputData, nav, details }) {
  nav = normalizeValues(nav);
  updateLocalStorage({
    formatter: Formatters.HumanComedyFormatter,
    key: 'nav',
    value: nav,
  });

  details = normalizeValues(details);
  updateLocalStorage({
    formatter: Formatters.HumanComedyFormatter,
    key: 'details',
    value: details,
  });

  const TEMPLATES = getTemplates();

  const inputDom = extractBr(convertEditorDataToDom(inputData));
  const input = inputDom.querySelectorAll('p');

  let storyOutput = '';

  const formatLineHelper = formatLine(TEMPLATES);

  for (let i = 0; i < input.length; i++) {
    storyOutput += formatLineHelper(input[i]);
  }

  console.log(storyOutput);

  // Quote in header is just first line of story
  const blockquote = storyOutput.split('</p>')[0] + '</p>';

  let output = formatHeader({
    details,
    blockquote,
  });
  output += TEMPLATES.oissuOpen();
  output += storyOutput;
  output += formatNavBar(nav);
  output += TEMPLATES.oissuClose();
  return output;
}

const getTemplates = () => {
  const templates = {};

  templates.dialogue = (value) => `<p>${value}</p>\n`;
  templates.boldName = (value) => `<strong>${value}:</strong> `;
  templates.info = (value) => `<p><strong><i>${value}</i></strong></p>\n`;

  templates.separator = () => `<p>✦✦✦✦✦</p>\n`;

  templates.oissuOpen = () => `<div class="oissu">\n`;
  templates.oissuClose = () => `</div>\n`;

  return templates;
};

const normalizeValues = (object) => mapValues(object, (value) => value.trim());

const formatHeader = ({ details, blockquote }) => {
  return `<blockquote>${blockquote.trim()}</blockquote>
<img src="${details[DETAILS_KEYS.IMAGE]}">
[[MORE]]
`;
};

const formatNavBar = (nav) => {
  const TEMPLATES = getTemplates();
  let output = `${TEMPLATES.separator()}<blockquote class="os-block os-exclude">`;
  if (nav[NAV_KEYS.PREV_URL]) {
    output += `<a href="${nav[NAV_KEYS.PREV_URL]}">← prev</a> `;
  }
  output += `✦ <a href="${nav[NAV_KEYS.ALL_URL]}">all</a> ✦`;
  if (nav[NAV_KEYS.NEXT_URL]) {
    output += ` <a href="${nav[NAV_KEYS.NEXT_URL]}">next →</a>`;
  }
  output += '</blockquote>\n';
  return output;
};

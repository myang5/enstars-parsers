import { mapValues } from 'lodash';
import { extractBr, convertEditorDataToDom, updateLocalStorage } from '@utils';
import { Formatters } from '@constants';
import { formatLines } from './formatLines';
import { NAV_KEYS } from './nav_keys';

export function convertText({ inputData, nav }) {
  nav = normalizeValues(nav);
  updateLocalStorage({
    formatter: Formatters.HumanComedyFormatter,
    key: 'nav',
    value: nav,
  });

  const TEMPLATES = getTemplates();

  const inputDom = extractBr(convertEditorDataToDom(inputData));
  const input = inputDom.querySelectorAll('p');

  const { headerImage, headerQuote, storyOutput } = formatLines({
    templates: TEMPLATES,
    input,
  });

  let output = formatHeader({
    image: headerImage,
    quote: headerQuote,
  });
  output += TEMPLATES.oissuOpen();
  output += storyOutput;
  output += TEMPLATES.oissuClose();
  output += formatNavBar(nav);
  return output;
}

const getTemplates = () => {
  const templates = {};

  templates.dialogue = (value) => `<p>${value}</p>\n`;
  templates.boldName = (value) => `<strong>${value}:</strong> `;

  templates.image = (value) => `<img src="${value}">\n`;
  templates.blockquote = (value) => `<blockquote>${value}</blockquote>\n`;

  templates.oissuOpen = () => `<div class="oissu">\n`;
  templates.oissuClose = () => `</div>\n`;

  return templates;
};

const normalizeValues = (object) => mapValues(object, (value) => value.trim());

const formatHeader = ({ image, quote }) => {
  return `${quote}${image}[[MORE]]\n`;
};

const formatNavBar = (nav) => {
  let output = `<p>`;
  if (nav[NAV_KEYS.PREV_URL]) {
    output += `<a href="${nav[NAV_KEYS.PREV_URL]}">← prev</a> `;
  }
  output += `❖ <a href="${nav[NAV_KEYS.ALL_URL]}">all</a> ❖`;
  if (nav[NAV_KEYS.NEXT_URL]) {
    output += ` <a href="${nav[NAV_KEYS.NEXT_URL]}">next →</a>`;
  }
  output += '</p>\n';
  return output;
};

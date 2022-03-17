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
  output += formatNavBar(nav);
  output += TEMPLATES.oissuClose();
  return output;
}

const getTemplates = () => {
  const templates = {};

  templates.dialogue = (value) => `<p>${value}</p>\n`;
  templates.boldName = (value) => `<strong>${value}:</strong> `;

  templates.image = (value) => `<img src="${value}">\n`;

  templates.oissuOpen = () => `<div class="oissu">\n`;
  templates.oissuClose = () => `</div>\n`;

  return templates;
};

const normalizeValues = (object) => mapValues(object, (value) => value.trim());

const formatHeader = ({ image, quote }) => {
  return `<blockquote>${quote.trim()}</blockquote>\n${image}[[MORE]]\n`;
};

const formatNavBar = (nav) => {
  let output = `<blockquote class="os-block os-exclude">`;
  if (nav[NAV_KEYS.PREV_URL]) {
    output += `<a href="${nav[NAV_KEYS.PREV_URL]}">← prev</a> `;
  }
  output += `❖ <a href="${nav[NAV_KEYS.ALL_URL]}">all</a> ❖`;
  if (nav[NAV_KEYS.NEXT_URL]) {
    output += ` <a href="${nav[NAV_KEYS.NEXT_URL]}">next →</a>`;
  }
  output += '</blockquote>\n';
  return output;
};

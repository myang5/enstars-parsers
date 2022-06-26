import { compact } from 'lodash';
import {
  extractBr,
  convertEditorDataToDom,
  updateLocalStorage,
  normalizeValues,
  normalizeStaff,
} from '@utils';
import { Formatters, DETAILS_KEYS } from '@constants';
import { formatLines } from './formatLines';
import { NAV_KEYS } from './nav_keys';

export function convertText({
  inputData,
  nav,
  jpProofreaders,
  engProofreaders,
  translators,
}) {
  nav = normalizeValues(nav);
  updateLocalStorage({
    formatter: Formatters.HumanComedyFormatter,
    key: 'nav',
    value: nav,
  });

  jpProofreaders = normalizeStaff(jpProofreaders);
  updateLocalStorage({
    formatter: Formatters.HumanComedyFormatter,
    key: 'jpProofreaders',
    value: jpProofreaders,
  });

  engProofreaders = normalizeStaff(engProofreaders);
  updateLocalStorage({
    formatter: Formatters.HumanComedyFormatter,
    key: 'engProofreaders',
    value: engProofreaders,
  });

  translators = normalizeStaff(translators);
  updateLocalStorage({
    formatter: Formatters.HumanComedyFormatter,
    key: 'translators',
    value: translators,
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
    jpProofreaders,
    engProofreaders,
    translators,
  });
  output += TEMPLATES.oissuOpen({
    prevUrl: nav[NAV_KEYS.PREV_URL],
    nextUrl: nav[NAV_KEYS.NEXT_URL],
    allUrl: nav[NAV_KEYS.ALL_URL],
  });
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

  templates.oissuOpen = ({ prevUrl, nextUrl, allUrl }) => `<div class="oissu"
data-oissu-display="yns"
data-oissu-prev="${prevUrl} prev"
data-oissu-next="${nextUrl} next"
data-oissu-directory="${allUrl}">\n`;
  templates.oissuClose = () => `</div>\n`;

  return templates;
};

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
  image,
  quote,
  jpProofreaders,
  engProofreaders,
  translators,
}) => {
  const jpProofreading = joinStaff(jpProofreaders, ' + ');
  const fullJpProofreading = jpProofreading ? jpProofreading + ' (JP)' : '';
  const engProofreading = joinStaff(engProofreaders, ' + ');
  const fullEngProofreading = engProofreading ? engProofreading + ' (ENG)' : '';
  const translation = joinStaff(translators, ' & ');

  const proofreadingLine =
    jpProofreading || engProofreading
      ? `<p><b>Proofreading:</b> ${compact([
          fullJpProofreading,
          fullEngProofreading,
        ]).join(' &amp; ')}</p>`
      : '';

  return `${quote}${image}${proofreadingLine}
<p><b>Translation:</b> ${translation}</p>
[[MORE]]
`;
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

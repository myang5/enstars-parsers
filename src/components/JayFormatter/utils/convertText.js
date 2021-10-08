import { NAV_KEYS } from '@constants';
import extractBr from '@utils/extractBr';
import convertEditorDataToDom from '@utils/convertEditorDataToDom';
import formatLine from './formatLine';

/**
 * Formats text into source code for the wiki.
 * @return {string} The formatted text as a string to be placed in the output textarea
 */

export default function convertText({ inputData, nav }) {
  const TEMPLATES = getTemplates();
  const inputDom = extractBr(convertEditorDataToDom(inputData));
  updateLocalStorage('nav', nav);

  const input = inputDom.querySelectorAll('p');
  let output = '';

  const formatLineHelper = formatLine(TEMPLATES);

  for (let i = 0; i < input.length; i++) {
    output += formatLineHelper(input[i]);
  }

  // output += formatNavBar(nav);
  return output;
}

const getTemplates = () => {
  const templates = {};

  templates.dialogue = (value) => `<p>${value}</p>\n`;
  templates.boldName = (value) => `<strong>${value}:</strong> `;

  //   templates.noteLocation = (value) => `{% note location %}
  // **Location:** ${value}
  // {% endnote %}\n\n`;
  //   templates.noteCw = (value) => `{% note cw %}
  // **Content Warning:** ${value}
  // {% endnote %}\n\n`;
  //   templates.noteNarration = ({ label, value }) => `{% note narration %}
  // ${label ? `**${label}:** ` : ''}${value}
  // {% endnote %}\n\n`;

  //   templates.image = (value) => `{% img ${value} %}\n\n`;

  return templates;
};

/**
 * Save value in localStorage at specified key
 * @param {string} key
 * @param {string} value
 */
function updateLocalStorage(key, value) {
  if (value.length === 0) {
    localStorage.removeItem(key);
  } else if (JSON.stringify(value) !== localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

function formatNavBar(nav) {
  let output = '<div toc>\n';
  if (nav[NAV_KEYS.PREV_URL]) {
    output += `{% btn ${nav[NAV_KEYS.PREV_URL]},, arrow-left, ${
      nav[NAV_KEYS.PREV_TITLE]
    } %}\n`;
  }
  output += `{% btn ${nav[NAV_KEYS.INDEX]},, star, Index %}\n`;
  if (nav[NAV_KEYS.NEXT_URL]) {
    output += `{% btn ${nav[NAV_KEYS.NEXT_URL]},, arrow-right, ${
      nav[NAV_KEYS.NEXT_TITLE]
    } %}\n`;
  }
  output += '</div>\n';
  return output;
}

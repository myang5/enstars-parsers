import { extractBr, convertEditorDataToDom, updateLocalStorage } from '@utils';
import { FORMATTERS } from '@constants';
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
    formatter: FORMATTERS.MASHIRO_FORMATTER,
    key: 'nav',
    value: nav,
  });

  const input = inputDom.querySelectorAll('p');
  let output = '';

  const formatLineHelper = formatLine(TEMPLATES);

  for (let i = 0; i < input.length; i++) {
    output += formatLineHelper(input[i]);
  }

  output += TEMPLATES.endBubble();

  output += formatNavBar(nav);
  return output;
}

const getTemplates = () => {
  const templates = {};

  templates.startBubble = (value) => `{% bubble ${value} %}\n`;
  templates.endBubble = () => `{% endbubble %}\n\n`;
  templates.dialogue = (value, isFirstLine) =>
    `${!isFirstLine ? '\n' : ''}${value}\n`;

  templates.noteLocation = (value) => `{% note location %}
**Location:** ${value}
{% endnote %}\n\n`;
  templates.noteCw = (value) => `{% note cw %}
**Content Warning:** ${value}
{% endnote %}\n\n`;
  templates.noteNarration = ({ label, value }) => `{% note narration %}
${label ? `**${label}:** ` : ''}${value}
{% endnote %}\n\n`;

  templates.image = (value) => `{% img ${value} %}\n\n`;

  return templates;
};

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

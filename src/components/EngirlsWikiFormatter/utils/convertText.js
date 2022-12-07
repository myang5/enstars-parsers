import { pick } from 'lodash';
import {
  extractBr,
  convertEditorDataToDom,
  updateLocalStorage,
  normalizeValues,
  normalizeStaff,
} from '@utils';
import { FORMATTERS } from '@constants';
import { formatLine } from './formatLine';
import { NAV_KEYS } from './nav_keys';
import { DETAILS_KEYS } from './details_keys';

export function convertText({
  details,
  inputData,
  nav,
  proofreaders,
  translators,
}) {
  nav = normalizeValues(nav);
  updateLocalStorage({
    formatter: FORMATTERS.ENGIRLS_WIKI_FORMATTER,
    key: 'nav',
    value: nav,
  });

  details = normalizeValues(details);
  updateLocalStorage({
    formatter: FORMATTERS.ENGIRLS_WIKI_FORMATTER,
    key: 'details',
    value: details,
  });

  proofreaders = normalizeStaff(proofreaders);
  updateLocalStorage({
    formatter: FORMATTERS.ENGIRLS_WIKI_FORMATTER,
    key: 'proofreaders',
    value: proofreaders,
  });

  translators = normalizeStaff(translators);
  updateLocalStorage({
    formatter: FORMATTERS.ENGIRLS_WIKI_FORMATTER,
    key: 'translators',
    value: translators,
  });

  let output = templates.header(
    pick(details, [
      DETAILS_KEYS.WRITER,
      DETAILS_KEYS.IMAGE,
      DETAILS_KEYS.LOCATION,
    ]),
  );

  // const inputDom = extractBr(convertEditorDataToDom(inputData));
  // const input = inputDom.querySelectorAll('p');
  // const formatLineHelper = formatLine(templates);

  // for (let i = 0; i < input.length; i++) {
  //   output += formatLineHelper(input[i]);
  // }

  output += formatStaff({ staff: translators, label: 'Translation' });
  output += formatStaff({ staff: proofreaders, label: 'Proofreading' });
  output += templates.tableEnd();
  output += formatNavBar(nav);
  return output;
}

export const templates = {
  header: ({
    writer,
    image,
    location,
  }) => `{| class="article-table" cellspacing="1/6" cellpadding="2" border="1" align="center" width="100%"
! colspan="2" style="text-align:center;background-color:#C21B5F; color:#FFFFFF;" |'''Writer:''' ${writer}
|-
| colspan="2" |[[File:${image}|660px|link=|center]]
|-
! colspan="2" style="text-align:center;background-color:#EE6796; color:#FFFFFF;" |'''Location: ${location}'''
`,
  dialogueRender: (value) => `|-
|[[File:${value}|x200px|link=|center]]
|
`,
  cgRender: (value) => `|-
! colspan="2" style="text-align:center;" |[[File:${value}|center|link=|660px]]
`,
  heading: () => `|-
! colspan="2" style="text-align:center;background-color:${locationCol}; color:${textCol};" |'''HEADING'''
`,
  // Fandom wiki link documentation:
  // https://community.fandom.com/wiki/Help:Links/Wikitext
  link: (link, text) => `[${link} ${text}]`,
  tableEnd: () => '|}\n',
  chapterNav: ({
    storyUrl,
    prevUrl,
    prevText,
    currentText,
    nextUrl,
    nextText,
  }) => `{{PrevNext
|Story = ${storyUrl}
|PrevChap = ${prevUrl}
|Previous Chapter = ${prevText}
|Current Chapter = ${currentText}
|NextChap = ${nextUrl}
|Next Chapter = ${nextText}
}}`,
  firstChapterNav: ({
    storyUrl,
    currentText,
    nextUrl,
    nextText,
  }) => `{{BeginPrevNext
|CurrentChapter = ${currentText}
|Story = ${storyUrl}
|NextChap = ${nextUrl}
|Next Chapter = ${nextText}
}}`,
  lastChapterNav: ({
    storyUrl,
    prevUrl,
    prevText,
    currentText,
  }) => `{{EndPrevNext
|Story = ${storyUrl}
|PrevChap = ${prevUrl}
|Previous Chapter = ${prevText}
|Current Chapter = ${currentText}
}}`,
  firstChapterMainStoryNav: () => {},
  lastChapterMainStoryNav: () => {},
};

const formatStaff = ({ staff, label }) => {
  const resultText = staff.reduce((result, person) => {
    const { [DETAILS_KEYS.NAME]: name, [DETAILS_KEYS.LINK]: link } = person;
    if (!name && !link) {
      return result;
    }
    if (result.length !== 0) {
      result += ', ';
    }
    result += !link ? name : templates.link(link, name);

    return result;
  }, '');
  if (resultText.length === 0) {
    return resultText;
  }
  return `|-
! colspan="2" style="text-align:center;background-color:#C21B5F;color:#FFFFFF;" |'''${label}: ${resultText} '''
`;
};

const formatNavBar = (nav) => {
  const inputNav = {
    storyUrl: nav[NAV_KEYS.STORY_URL],
    prevUrl: nav[NAV_KEYS.PREV_URL],
    prevText: nav[NAV_KEYS.PREV_TEXT],
    currentText: nav[NAV_KEYS.CURRENT_TEXT],
    nextUrl: nav[NAV_KEYS.NEXT_URL],
    nextText: nav[NAV_KEYS.NEXT_TEXT],
  };
  if (inputNav.prevUrl && inputNav.nextUrl) {
    return templates.chapterNav(inputNav);
  }
  if (!inputNav.nextUrl) {
    return templates.lastChapterNav(inputNav);
  }
  if (!inputNav.prevUrl) {
    return templates.firstChapterNav(inputNav);
  }
};

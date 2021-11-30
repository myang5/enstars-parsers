import { compact } from 'lodash';
import { formatLine } from './formatLine';
import { DETAILS_KEYS } from './details_keys';
import { getTemplates } from './convertText';

const getLink = (href, text) => `<a href="${href}">${text}</a>`;
const joinStaff = (staff, separator) =>
  staff
    .map((person) =>
      person[DETAILS_KEYS.LINK]
        ? getLink(person[DETAILS_KEYS.LINK], person[DETAILS_KEYS.NAME])
        : person[DETAILS_KEYS.NAME],
    )
    .join(separator);

export const formatHeader = ({
  details,
  characters,
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
<p><b>Characters:</b> ${characters}</p>${proofreadingLine}
<p><b>Translation:</b> ${translation}</p>
<blockquote>${blockquoteOutput.trim()}</blockquote>
<img src="${details[DETAILS_KEYS.IMAGE]}">
[[MORE]]
`;
};

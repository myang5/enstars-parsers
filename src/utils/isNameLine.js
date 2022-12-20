const { chain } = require('lodash');

/**
 * Identify lines containing dialogue, labeled with the name of a character
 * NOTE: isHeadingLine should be used beforehand to filter out headings
 * @param {string} line
 */
export const isNameLine = (line) => {
  if (!line.includes(':')) {
    return false;
  }

  const hasNoLabel =
    chain(line)
      .split(':')
      .map((part) => part.trim())
      .compact()
      .value().length < 2;
  if (hasNoLabel) {
    return false;
  }

  const hasRandomColon =
    chain(line).split(':').first().trim()?.split(' ').value().length > 1;
  if (hasRandomColon) {
    return false;
  }

  return true;
};

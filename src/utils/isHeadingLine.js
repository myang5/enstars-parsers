import { chain } from 'lodash';

/**
 * Identify lines with meta information about the story
 * @param {string} line
 */
export const isHeadingLine = (line) => {
  const infoLabels = ['LOCATION', 'SEASON', 'TIME', 'HEADING'];
  return infoLabels.includes(
    chain(line.toUpperCase()).split(':').first().value(),
  );
};

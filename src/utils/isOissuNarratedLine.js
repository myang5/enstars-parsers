import { chain } from 'lodash';

/**
 * Lines that need to be surrounded by blockquotes in order
 * to properly format them in Oissu
 * https://yuukun.dev/oissu/docs/narration
 * @param {string} line
 */
export const isOissuNarratedLine = (line) => {
  const infoLabels = ['LOCATION', 'SEASON', 'TIME', 'HEADING'];
  return infoLabels.includes(
    chain(line.toUpperCase()).split(':').first().value(),
  );
};

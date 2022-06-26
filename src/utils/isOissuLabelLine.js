const { chain } = require('lodash');

export const isOissuLabelLine = (line) => {
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

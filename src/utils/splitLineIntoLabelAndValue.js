export const splitLineIntoLabelAndValue = (line) => {
  // Use rest operator in case dialogue also contains colons
  const [label, ...value] = line.split(':');
  return [label.trim(), value.join(':').trim()];
};

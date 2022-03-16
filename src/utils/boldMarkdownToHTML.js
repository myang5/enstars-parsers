export const boldMarkdownToHTML = (line) => {
  return line.replace(/'''(.*?)'''/g, '<b>$1</b>');
};

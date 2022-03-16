export const italicMarkdownToHTML = (line) => {
  return line.replace(/''(.*?)''/g, '<i>$1</i>');
};

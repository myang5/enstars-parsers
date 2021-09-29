export default function formatLine() {
  return (p) => {
    let line = p.textContent.replace(/&nbsp;/g, ' ').trim();

    if (!line) {
      return '';
    }

    line = formatBold(line);
    line = formatItalic(line);
    line = boldName(line);

    return line + '\n\n';
  };
}

const formatBold = (line) => {
  return line.replace(/'''(.*?)'''/g, '<b>$1</b>');
};

const formatItalic = (line) => {
  return line.replace(/''(.*?)''/g, '<i>$1</i>');
};

const boldName = (line) => {
  return line.replace(/^([A-Z]\w*:)/g, '<b>$1</b>');
};

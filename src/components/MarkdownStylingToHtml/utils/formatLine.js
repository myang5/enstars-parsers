import { boldMarkdownToHTML, italicMarkdownToHTML } from '@utils';

export default function formatLine() {
  return (p) => {
    let line = p.textContent.replace(/&nbsp;/g, ' ').trim();

    if (!line) {
      return '';
    }

    line = boldMarkdownToHTML(line);
    line = italicMarkdownToHTML(line);
    line = boldName(line);

    return line + '\n\n';
  };
}

const boldName = (line) => {
  return line.replace(/^([A-Z]\w*:)/g, '<b>$1</b>');
};

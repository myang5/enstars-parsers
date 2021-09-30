import { chain, inRange } from 'lodash';

/**
 * Helper function for convertText that formats each dialogue line.
 * @param {object} TEMPLATES
 */

export default function formatLine(TEMPLATES) {
  // Handle both dialogue formats where name is on every line
  // or only on first line
  let currentName = '';
  return (p) => {
    const line = p.textContent.replace(/&nbsp;/g, ' ').trim();

    if (!line) {
      return '';
    }

    if (isImageLine(line)) {
      return TEMPLATES.image(getValueFromLine(line));
    }

    if (isLocationLine(line)) {
      return TEMPLATES.noteLocation(getValueFromLine(line));
    }

    if (isCwLine(line)) {
      return TEMPLATES.noteCw(getValueFromLine(line));
    }

    if (isNarrationLine(line)) {
      return TEMPLATES.noteNarration(getValuesFromNarrationLine(line));
    }

    if (isNameLine(line)) {
      const [name, dialogue] = splitLineIntoNameAndDialogue(line);
      if (currentName === name) {
        return TEMPLATES.dialogue(dialogue);
      }

      let result = '';
      if (currentName) {
        result += TEMPLATES.endBubble();
      }
      currentName = name;
      result += TEMPLATES.startBubble(name);
      result += TEMPLATES.dialogue(dialogue, true);
      return result;
    }

    if (!!currentName) {
      return TEMPLATES.dialogue(line);
    }

    return '';
  };
}

const isLocationLine = (line) => line.toUpperCase().startsWith('LOCATION:');
const isCwLine = (line) => line.toUpperCase().startsWith('CW:');
const isImageLine = (line) => line.toUpperCase().startsWith('IMAGE:');
const getValueFromLine = (line) => {
  const result = line.match(/^\w*:(.*)/);
  return result[1].trim();
};

const isNarrationLine = (line) => line.toUpperCase().startsWith('NARRATION:');
const getValuesFromNarrationLine = (line) => {
  // Narration: Time: A few days later: arbitrary other colon
  const valueWithLabel = line.match(/^\w*:( ?\w*?):(.*)/);
  if (valueWithLabel) {
    return { label: valueWithLabel[1].trim(), value: valueWithLabel[2].trim() };
  }
  // Narration: A few days later: arbitrary other colon
  return { value: getValueFromLine(line) };
};

/**
 * Example lines:
 *
 * Midori: some dialogue
 *
 * Midori, hidden: some dialogue
 */
const isNameLine = (line) => {
  if (
    chain(line)
      .split(':')
      .map((part) => part.trim())
      .compact()
      .value().length < 2
  ) {
    return false;
  }
  const label = line.split(':')[0];
  return inRange(
    chain(label)
      .split(',')
      .map((part) => part.trim())
      .compact()
      .value().length,
    1,
    3,
  );
};

const splitLineIntoNameAndDialogue = (line) => {
  // Use rest operator in case dialogue also contains colons
  const [name, ...dialogue] = line.split(':');
  return [
    chain(name)
      .split(',')
      .map((part) => part.trim())
      .join(' ')
      .value(),
    dialogue.join(':').trim(),
  ];
};

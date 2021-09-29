import { NAME_LINKS } from '../constants';
import formatStyling from './formatStyling';
import { chain, inRange } from 'lodash';

/*
How formatter converts text (a rough summary)
Types of lines:
 Filename (for images) - formatter checks if file extension like .png exists in line
 (since this probably wouldn't show up in a dialogue line)
 Dialogue line (no label) - formatter checks if first word has no colon.
 Formatter assumes label-less lines that aren't filenames are dialogue lines
 Heading: label
 Name: label
Formatter identifies labels by checking if first word has a colon character (str.split(' '))
Formatter assumes the label is only one word long
Formatter assumes all the other words are part of the line/heading

need to account for text styling and how it might interfere with parsing
code has to handle partial line styling and whole line styling
TLers may paste code from their dreamwidth accounts where they bold/italicize names/headings
case 1: no styling, <p> only contains text
case 3: styling on non-label lines
case 3a: styling on filenames ex. <p><strong>filename</strong></p>
case 3b: styling in dialogue lines (probably intentional) ex. <p><strong>dialogue line</strong></p>
case 3c: partial styling on dialogue lines ex. <p>dialogue <strong>line</strong></p>
case 4: styling on label lines
case 4a: styling on labels ex. <p><strong>Ritsu:</strong> dialogue line</p>
case 4b: styling on informational headings <p><strong>Location: Hallway</strong</p>
case 4c: other partial styling variations

What styling should be kept?
Only styling on the dialogue lines (excluding labels)
How to detect dialogue line styling vs. other styling?
Evaluate <p>.textContent and then decide from there
*/

/**
 * Helper function for convertText that formats each dialogue line.
 * @param {object} TEMPLATES
 * @param {object} renders
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

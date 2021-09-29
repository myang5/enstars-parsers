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

    if (isLocationLine(line)) {
      return TEMPLATES.noteLocation(getNoteValueFromLine(line));
    }

    if (isCwLine(line)) {
      return TEMPLATES.noteCw(getNoteValueFromLine(line));
    }

    if (isNarrationLine(line)) {
      return TEMPLATES.noteNarration(getValuesFromNarrationLine(line));
    }

    // // -----FILTER OUT FILE NAMES-----
    // if (isFileName(line)) {
    //   currentName = ''; // since its new section
    //   return TEMPLATES.cgRender.replace('FILENAME', line.trim());
    // }

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
const getNoteValueFromLine = (line) => {
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
  const value = line.match(/^\w*:(.*)/);
  return { value: value[1].trim() };
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

/**
 * Check if a dialogue line is actually an image file name
 * @param {string} line
 * @return {boolean}
 */

export function isFileName(line) {
  const extensions = ['.png', '.gif', '.jpg', '.jpeg', '.ico', '.pdf', '.svg'];
  for (let i = 0; i < extensions.length; i++) {
    if (line.toLowerCase().endsWith(extensions[i])) {
      return true;
    }
  }
  return false;
}

/**
 * Formats TL note markers into clickable wiki code citation references
 * [1] --> <span id='${title}RefNUM'>[[#${title}NoteNUM|<sup>[NUM]</sup>]]</span>
 * The complicated id format is required for the citations to work with the
 * story page's tabview, since each tab may have multiple citations with the same number
 * @param {string} line
 * @return {string} The line with any TL markers formatted
 */

function formatTlMarker(line) {
  if (line.search(/\[\d+\]/) > 0) {
    // Look for TL Markers
    const title = document.querySelector('#title').value;
    if (title.length > 0) {
      const markers = line.match(/\[\d+\]/g);
      markers.forEach((marker) => {
        const num = marker.substring(
          marker.indexOf('[') + 1,
          marker.indexOf(']'),
        );
        const tlCode = `<span id='${title}Ref${num}'>[[#${title}Note${num}|<sup>[${num}]</sup>]]</span>`;
        line = line.replace(marker, tlCode);
      });
    } else {
      document.querySelector('.error').innerHTML =
        'WARNING: The formatter detected TL notes in the dialogue but no chapter title in the TL Notes tab. TL notes were not formatted.';
    }
  }
  return line;
}

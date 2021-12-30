import { isNameLineException } from '@utils';
import { chain, inRange } from 'lodash';

/**
 * Helper function for convertText that formats each dialogue line.
 * @param {object} TEMPLATES
 */

export default function formatLine(TEMPLATES) {
  // Handle both dialogue formats where name is on every line
  // or only on first line
  let currentName = '';
  let interruptedName = '';
  return (p) => {
    let line = p.textContent.replace(/&nbsp;/g, ' ').trim();

    if (!line) {
      return '';
    }

    let nonDialogueResult = '';

    if (isImageLine(line)) {
      nonDialogueResult += TEMPLATES.image(getValueFromLine(line));
    } else if (isLocationLine(line)) {
      nonDialogueResult += TEMPLATES.noteLocation(getValueFromLine(line));
    } else if (isCwLine(line)) {
      nonDialogueResult += TEMPLATES.noteCw(getValueFromLine(line));
    } else if (isNarrationLine(line)) {
      nonDialogueResult += TEMPLATES.noteNarration(
        getValuesFromNarrationLine(line),
      );
    }

    if (nonDialogueResult) {
      if (currentName) {
        interruptedName = currentName;
        currentName = '';
        return TEMPLATES.endBubble() + nonDialogueResult;
      }
      return nonDialogueResult;
    }

    line = formatStyling(p);
    line = formatCharacterEntities(line);

    if (isNameLine(line) && !isNameLineException(line)) {
      interruptedName = '';
      const [name, dialogue] = splitLineIntoNameAndDialogue(line);

      // Handle case where name is on every dialogue line
      if (currentName === name) {
        return TEMPLATES.dialogue(dialogue);
      }

      let result = '';
      // Close bubble of other character that was speaking
      if (currentName) {
        result += TEMPLATES.endBubble();
      }
      currentName = name;
      result += TEMPLATES.startBubble(name);
      result += TEMPLATES.dialogue(dialogue, true);
      return result;
    }

    if (interruptedName) {
      currentName = interruptedName;
      interruptedName = '';

      let result = '';
      result += TEMPLATES.startBubble(currentName);
      result += TEMPLATES.dialogue(line, true);
      return result;
    }

    // Handle case where name is not on every dialogue line
    if (currentName) {
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
 *
 * Some dialogue: with a colon
 *
 * Some dialogue with: a colon
 *
 * Currently cannot differentiate between lines with a random colon
 * - where the colon is after the first word (Some: dialogue with a colon)
 * - where there colon is after the first two words
 *   and the words are separated by a comma (Some, dialogue: with: a colon)
 * since those lines look like name labels to the parser
 */
const isNameLine = (line) => {
  if (!line.includes(':')) {
    return false;
  }

  const potentialLabel = line.split(':')[0].trim();

  const hasNoLabel = !potentialLabel;
  if (hasNoLabel) {
    return false;
  }

  // Detect lines such as "Some dialogue: with a colon"
  const labelWords = chain(potentialLabel)
    .split(' ')
    .map((part) => part.trim())
    .compact()
    .value();
  // Label can have
  // - 2 words in cases like "Midori, hidden: some dialogue"
  // - 1 word in cases like "Midori: some dialogue"
  const hasRandomColon =
    labelWords.length > 2 ||
    (labelWords.length > 1 && !labelWords[0].includes(','));
  if (hasRandomColon) {
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
 *
 * @param {*} p The paragraph element
 * @returns Paragraph element's innerHTML with styling formatted
 */
const formatStyling = (p) => {
  p.querySelectorAll('i').forEach((italic) => {
    italic.replaceWith(`*${italic.textContent}*`);
  });
  // Make sure stray spaces are moved outside of formatted expressions
  p.innerHTML = p.innerHTML.replace(/\*( ?)(.+?)( ?)\*/g, '$1*$2*$3');
  // Mid-word italicizing needs to use <em> tags instead
  p.innerHTML = p.innerHTML.replace(/\*(\w+?)\*([^ ])/g, '<em>$1</em>$2');
  p.innerHTML = p.innerHTML.replace(/([^ ])\*(\w+?)\*/g, '$1<em>$2</em>');

  p.querySelectorAll('strong').forEach((strong) => {
    strong.replaceWith(`**${strong.textContent}**`);
  });
  // Do bold spaces after italic because italic regex will accidentally match bold
  p.innerHTML = p.innerHTML.replace(/\*\*( ?)(.+?)( ?)\*\*/g, '$1**$2**$3');
  p.innerHTML = p.innerHTML.replace(/\*\*(\w+?)\*\*([^ ])/g, '<b>$1</b>$2');
  p.innerHTML = p.innerHTML.replace(/([^ ])\*\*(\w+?)\*\*/g, '$1<b>$2</b>');

  let line = p.innerHTML;

  // If beginning text of line is bolded,
  // need to handle name lines and dialogue lines appropriately
  if (line.startsWith('**')) {
    const result = line.match(/^\*\*(.*?)\*\*/);
    const originalString = result[0];
    const boldContent = result[1];
    const testLine = line.replace(originalString, boldContent);
    if (isNameLine(testLine)) {
      return testLine;
    }
  }

  return line;
};

const formatCharacterEntities = (line) => {
  line = line.replace(/&lt;/g, '<');
  line = line.replace(/&gt;/g, '>');
  line = line.replace(/&nbsp;/g, ' ');
  return line.trim();
};

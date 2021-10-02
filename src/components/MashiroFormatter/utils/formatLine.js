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

    if (isNameLine(line)) {
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

  let line = p.innerHTML.replace(/&nbsp;/g, ' ').trim();

  return line;
};

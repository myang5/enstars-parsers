import React, { useState } from 'react';

const COPY_BUTTON_TEXT = {
  COPY: 'Copy Output',
  COPIED: 'Copied',
};

export const MainActions = ({ outputRef, onConvert }) => {
  const [copyButton, setCopyButton] = useState(COPY_BUTTON_TEXT.COPY);

  const handleConvert = () => {
    setCopyButton(COPY_BUTTON_TEXT.COPY);
    onConvert();
  };

  // copies text to clipboard
  const copyToClip = () => {
    outputRef.current.select();
    document.execCommand('copy');
    setCopyButton(COPY_BUTTON_TEXT.COPIED);
  };

  return (
    <div className="actions">
      <button type="button" onClick={handleConvert} id="convert-button">
        CONVERT
      </button>
      <button type="button" onClick={copyToClip} id="copy-button">
        {copyButton}
      </button>
    </div>
  );
};

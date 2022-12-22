import React, { useState } from 'react';
import './MainActions.less';

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
    <div className="main-actions">
      <button type="button" onClick={handleConvert} className="primary-button">
        CONVERT
      </button>
      <button type="button" onClick={copyToClip} className="secondary-button">
        {copyButton}
      </button>
    </div>
  );
};

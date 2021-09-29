import React, { useState, useRef } from 'react';
import { TabContent, InputEditor } from '../TabComponents';
import { StateProvider, useStateContext } from './StateContext';
import convertText from '../utils/convertText';
import './Main.less';

export default function Main() {
  const outputRef = useRef(null);

  return (
    <StateProvider>
      <div className="main-page jay-formatter">
        <Input />
        <Buttons {...{ outputRef }} />
        <textarea className="output" ref={outputRef} spellCheck={false} />
      </div>
    </StateProvider>
  );
}

const Input = () => {
  return (
    <div className="input">
      <TabContent value={'Text'} clickedTab={'Text'}>
        <InputEditor />
      </TabContent>
    </div>
  );
};

const COPY_BUTTON_TEXT = {
  COPY: 'Copy Output',
  COPIED: 'Copied',
};

const Buttons = ({ outputRef }) => {
  const { inputRef } = useStateContext();
  const [copyButton, setCopyButton] = useState(COPY_BUTTON_TEXT.COPY);

  // copies text to clipboard
  const copyToClip = () => {
    outputRef.current.select();
    document.execCommand('copy');
    setCopyButton(COPY_BUTTON_TEXT.COPIED);
  };

  const convertOnClick = () => {
    setCopyButton(COPY_BUTTON_TEXT.COPY);
    const output = convertText({
      inputData: inputRef.current.editor.getData(),
    });
    outputRef.current.value = output;
  };

  return (
    <div className="actions">
      <button type="button" onClick={convertOnClick} id="convert-button">
        CONVERT
      </button>
      <button type="button" onClick={copyToClip} id="copy-button">
        {copyButton}
      </button>
    </div>
  );
};

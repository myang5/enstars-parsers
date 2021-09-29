import React, { useState, useRef } from 'react';
import { StateProvider, useStateContext } from './StateContext';
import { TabMenu, TabContent, InputEditor, NavContent } from '../TabComponents';
import convertText from 'Utils/convertText';
import './Main.less';

const TABS = {
  TEXT: 'Text',
  NAV: 'Story Nav',
};
const tabTitles = Object.values(TABS);

export default function Main() {
  const outputRef = useRef(null);

  return (
    <StateProvider>
      <div className="main-page mashiro-formatter">
        <Input />
        <Buttons {...{ outputRef }} />
        <textarea className="output" ref={outputRef} spellCheck={false} />
      </div>
    </StateProvider>
  );
}

const Input = () => {
  const [clicked, setClicked] = useState(TABS.TEXT);

  return (
    <div className="input">
      <TabMenu {...{ tabs: tabTitles, clicked, onClick: setClicked }} />
      <TabContent {...{ value: TABS.TEXT, clicked }}>
        <InputEditor />
      </TabContent>
      <TabContent {...{ value: TABS.NAV, clicked }}>
        <NavContent />
      </TabContent>
    </div>
  );
};

const COPY_BUTTON_TEXT = {
  COPY: 'Copy Output',
  COPIED: 'Copied',
};

const Buttons = ({ outputRef }) => {
  const { nav, inputRef } = useStateContext();
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
      nav,
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

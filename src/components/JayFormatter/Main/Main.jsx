import React, { useState, useRef } from 'react';
import { MainActions } from '@shared/MainActions';
import { TabContent } from '@shared/TabContent';
import { StateProvider, useStateContext } from './StateContext';
import { TabMenu, InputEditor, NavContent } from '../TabComponents';
import convertText from '../utils/convertText';

const TABS = {
  TEXT: 'Text',
  NAV: 'Story Nav',
};
const tabTitles = Object.values(TABS);

export const Main = () => (
  <StateProvider>
    <MainContent />
  </StateProvider>
);

const MainContent = () => {
  const { nav, inputRef } = useStateContext();
  const outputRef = useRef(null);

  const onConvert = () => {
    const output = convertText({
      inputData: inputRef.current.editor.getData(),
      nav,
    });
    outputRef.current.value = output;
  };

  return (
    <div className="main-page jay-formatter">
      <Input />
      <MainActions {...{ outputRef, onConvert }} />
      <textarea className="output" ref={outputRef} spellCheck={false} />
    </div>
  );
};

const Input = () => {
  const [clickedValue, setClickedValue] = useState(TABS.TEXT);

  return (
    <div className="input">
      <TabMenu
        tabs={tabTitles}
        clicked={clickedValue}
        onClick={setClickedValue}
      />
      <TabContent {...{ value: TABS.TEXT, clickedValue }}>
        <InputEditor />
      </TabContent>
      <TabContent {...{ value: TABS.NAV, clickedValue }}>
        <NavContent />
      </TabContent>
    </div>
  );
};

import React, { useState, useRef } from 'react';
import { MainActions, TabContent, TabMenu, MainWrapper } from '@shared';
import { StateProvider, useStateContext } from './StateContext';
import { InputEditor, NavContent, DetailContent } from '../TabComponents';
import { convertText } from '../utils';

const TABS = {
  TEXT: 'Text',
  DETAILS: 'Details',
  NAV: 'Story Nav',
};
const tabTitles = Object.values(TABS);

export const Main = () => (
  <StateProvider>
    <MainContent />
  </StateProvider>
);

const MainContent = () => {
  const { inputRef, nav, jpProofreaders, engProofreaders, translators } =
    useStateContext();
  const outputRef = useRef(null);

  const onConvert = () => {
    const output = convertText({
      inputData: inputRef.current.editor.getData(),
      nav,
      jpProofreaders,
      engProofreaders,
      translators,
    });
    outputRef.current.value = output;
  };

  return (
    <MainWrapper className="oissu-formatter">
      <Input />
      <MainActions {...{ outputRef, onConvert }} />
      <textarea className="output" ref={outputRef} spellCheck={false} />
    </MainWrapper>
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
      <TabContent {...{ value: TABS.DETAILS, clickedValue }}>
        <DetailContent />
      </TabContent>
      <TabContent {...{ value: TABS.NAV, clickedValue }}>
        <NavContent />
      </TabContent>
    </div>
  );
};

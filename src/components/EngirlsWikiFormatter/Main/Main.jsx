import React, { useState, useRef } from 'react';
import { MainActions } from '@shared/MainActions';
import { TabContent } from '@shared/TabContent';
import { TabMenu } from '@shared/TabMenu';
import { StateProvider, useStateContext } from '../StateContext';
import { convertText } from '../utils';
import { DetailContent } from '../DetailContent';
import { InputEditor } from '../InputEditor';
import { NavContent } from '../NavContent';

const TABS = {
  TEXT: 'Text',
  NAV: 'Story Nav',
  DETAILS: 'Details',
  RENDERS: 'Renders',
  TL_NOTES: 'TL Notes',
};
const tabTitles = Object.values(TABS);

export const Main = () => (
  <StateProvider>
    <MainContent />
  </StateProvider>
);

const MainContent = () => {
  const { details, inputRef, isMainStoryNav, nav, proofreaders, translators } =
    useStateContext();
  const outputRef = useRef(null);

  const onConvert = () => {
    const output = convertText({
      details,
      inputData: inputRef.current.editor.getData(),
      isMainStoryNav,
      nav,
      proofreaders,
      translators,
    });
    outputRef.current.value = output;
  };

  return (
    <div className="main-page engirls-wiki-formatter">
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
      <TabContent {...{ value: TABS.DETAILS, clickedValue }}>
        <DetailContent />
      </TabContent>
      <TabContent {...{ value: TABS.NAV, clickedValue }}>
        <NavContent />
      </TabContent>
    </div>
  );
};

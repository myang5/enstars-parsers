import React, { useState, useRef } from 'react';
import { MainActions, TabContent, TabMenu, MainWrapper } from '@shared';
import { StateProvider, useStateContext } from '../StateContext';
import { convertText } from '../utils';
import { DetailContent } from '../DetailContent';
import { InputEditor } from '../InputEditor';
import { NavContent } from '../NavContent';
import { RenderContent } from '../RenderContent';

const TABS = {
  TEXT: 'Text',
  NAV: 'Story Nav',
  DETAILS: 'Details',
  RENDERS: 'Renders',
  // TODO
  // TL_NOTES: 'TL Notes',
};
const tabTitles = Object.values(TABS);

export const Main = () => (
  <StateProvider>
    <MainContent />
  </StateProvider>
);

const MainContent = () => {
  const {
    details,
    inputRef,
    isMainStoryNav,
    nav,
    proofreaders,
    renders,
    translators,
  } = useStateContext();
  const outputRef = useRef(null);

  const onConvert = () => {
    const output = convertText({
      details,
      inputData: inputRef.current.editor.getData(),
      isMainStoryNav,
      nav,
      proofreaders,
      renders,
      translators,
    });
    outputRef.current.value = output;
  };

  return (
    <MainWrapper className="engirls-wiki-formatter">
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
      <TabContent {...{ value: TABS.RENDERS, clickedValue }}>
        <RenderContent />
      </TabContent>
    </div>
  );
};

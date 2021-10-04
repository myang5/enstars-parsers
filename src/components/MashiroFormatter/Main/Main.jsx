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

import React, { useRef } from 'react';
import { MainActions, TabContent, MainWrapper } from '@shared';
import { InputEditor } from '../TabComponents';
import { StateProvider, useStateContext } from './StateContext';
import convertText from '../utils/convertText';
import './Main.less';

export const Main = () => (
  <StateProvider>
    <MainContent />
  </StateProvider>
);

const MainContent = () => {
  const { inputRef } = useStateContext();
  const outputRef = useRef(null);

  const onConvert = () => {
    const output = convertText({
      inputData: inputRef.current.editor.getData(),
    });
    outputRef.current.value = output;
  };

  return (
    <MainWrapper className="markdown-styling-to-html">
      <Input />
      <MainActions {...{ outputRef, onConvert }} />
      <textarea className="output" ref={outputRef} spellCheck={false} />
    </MainWrapper>
  );
};

const Input = () => {
  return (
    <div className="input">
      <TabContent value={'Text'} clickedValue={'Text'}>
        <InputEditor />
      </TabContent>
    </div>
  );
};

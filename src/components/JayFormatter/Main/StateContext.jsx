import React, { createContext, useRef, useContext } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  // create refs for each CKEditor to pass into EditorContext
  const inputRef = useRef(null);

  const state = {
    inputRef,
  };

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

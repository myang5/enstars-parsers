import React, { createContext, useState, useRef, useContext } from 'react';
import { Formatters } from '@constants';

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

const initialConfig =
  JSON.parse(localStorage.getItem(Formatters.HumanComedyFormatter)) || {};

export const StateProvider = ({ children }) => {
  const [nav, setNav] = useState(initialConfig.nav || {});

  // create refs for each CKEditor to pass into EditorContext
  const inputRef = useRef(null);

  const state = {
    nav,
    setNav,
    inputRef,
  };

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

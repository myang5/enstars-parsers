import React, { createContext, useState, useRef, useContext } from 'react';

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ children }) => {
  const [nav, setNav] = useState(JSON.parse(localStorage.getItem('nav')) || {});

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

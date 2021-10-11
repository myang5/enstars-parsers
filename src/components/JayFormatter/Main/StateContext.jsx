import React, { createContext, useState, useRef, useContext } from 'react';
import { Formatters } from '@constants';
import { getEmptyStaffObj } from '../utils';

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

const initialConfig = JSON.parse(localStorage.getItem(Formatters.JayFormatter));

export const StateProvider = ({ children }) => {
  const [details, setDetails] = useState(initialConfig.details || {});
  const [jpProofreaders, setJpProofreaders] = useState(
    initialConfig.jpProofreaders || [getEmptyStaffObj()],
  );
  const [engProofreaders, setEngProofreaders] = useState(
    initialConfig.engProofreaders || [getEmptyStaffObj()],
  );
  const [translators, setTranslators] = useState(
    initialConfig.translators || [getEmptyStaffObj()],
  );
  const [nav, setNav] = useState(
    // TODO: can clean up this logic after new config
    // storing system is in place
    initialConfig?.nav || JSON.parse(localStorage.getItem('nav')) || {},
  );

  // create refs for each CKEditor to pass into EditorContext
  const inputRef = useRef(null);

  const state = {
    nav,
    setNav,
    details,
    setDetails,
    jpProofreaders,
    setJpProofreaders,
    engProofreaders,
    setEngProofreaders,
    translators,
    setTranslators,
    inputRef,
  };

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

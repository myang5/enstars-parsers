import React, { createContext, useState, useRef, useContext } from 'react';
import { isEmpty } from 'lodash';
import { Formatters } from '@constants';
import { getEmptyStaffObj } from '@utils';

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);
const getStaff = (value) => (isEmpty(value) ? [getEmptyStaffObj()] : value);

const initialConfig =
  JSON.parse(localStorage.getItem(Formatters.HumanComedyFormatter)) || {};

export const StateProvider = ({ children }) => {
  const [nav, setNav] = useState(initialConfig.nav || {});
  const [jpProofreaders, setJpProofreaders] = useState(
    getStaff(initialConfig.jpProofreaders),
  );
  const [engProofreaders, setEngProofreaders] = useState(
    getStaff(initialConfig.engProofreaders),
  );
  const [translators, setTranslators] = useState(
    getStaff(initialConfig.translators),
  );

  // create refs for each CKEditor to pass into EditorContext
  const inputRef = useRef(null);

  const state = {
    nav,
    setNav,
    inputRef,
    jpProofreaders,
    setJpProofreaders,
    engProofreaders,
    setEngProofreaders,
    translators,
    setTranslators,
  };

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

import React, { createContext, useState, useRef, useContext } from 'react';
import { isEmpty } from 'lodash';
import { Formatters } from '@constants';
import { getEmptyStaffObj } from '@utils';

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

const initialConfig =
  JSON.parse(localStorage.getItem(Formatters.EngirlsWikiFormatter)) || {};
const getStaff = (value) => (isEmpty(value) ? [getEmptyStaffObj()] : value);

export const StateProvider = ({ children }) => {
  const [details, setDetails] = useState(initialConfig.details || {});
  const [characters, setCharacters] = useState();
  const [jpProofreaders, setJpProofreaders] = useState(
    getStaff(initialConfig.jpProofreaders),
  );
  const [engProofreaders, setEngProofreaders] = useState(
    getStaff(initialConfig.engProofreaders),
  );
  const [translators, setTranslators] = useState(
    getStaff(initialConfig.translators),
  );
  const [nav, setNav] = useState(initialConfig.nav || {});

  // create refs for each CKEditor to pass into EditorContext
  const inputRef = useRef(null);
  const blockquoteRef = useRef(null);

  const state = {
    nav,
    setNav,
    details,
    setDetails,
    characters,
    setCharacters,
    jpProofreaders,
    setJpProofreaders,
    engProofreaders,
    setEngProofreaders,
    translators,
    setTranslators,
    inputRef,
    blockquoteRef,
  };

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

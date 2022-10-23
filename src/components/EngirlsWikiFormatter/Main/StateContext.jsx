import React, { createContext, useState, useRef, useContext } from 'react';
import { isEmpty } from 'lodash';
import { AUTHOR_NAMES, DETAILS_KEYS, FORMATTERS } from '@constants';
import { getEmptyStaffObj } from '@utils';

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

const initialConfig =
  JSON.parse(localStorage.getItem(FORMATTERS.ENGIRLS_WIKI_FORMATTER)) || {};

const getStaff = (value) => (isEmpty(value) ? [getEmptyStaffObj()] : value);

export const StateProvider = ({ children }) => {
  const [renders, setRenders] = useState({});
  // needed to solve stale closure problem when renders is passed to CKEditor autosave
  // that was causing existing input values to be erased
  // https://css-tricks.com/dealing-with-stale-props-and-states-in-reacts-functional-components/
  const renderRef = useRef(renders);
  const [details, setDetails] = useState(
    initialConfig.details || {
      [DETAILS_KEYS.LOCATION]: '',
      [DETAILS_KEYS.WRITER]: AUTHOR_NAMES.AKIRA,
    },
  );
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
  const tlNotesRef = useRef(null);

  const state = {
    blockquoteRef,
    characters,
    colors,
    details,
    details,
    engProofreaders,
    inputRef,
    jpProofreaders,
    nav,
    renderRef,
    renders,
    setCharacters,
    setColors,
    setDetails,
    setEngProofreaders,
    setJpProofreaders,
    setNav,
    setRenders,
    setTranslators,
    tlNotesRef,
    translators,
  };

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

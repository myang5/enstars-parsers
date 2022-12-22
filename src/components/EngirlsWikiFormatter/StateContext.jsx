import React, {
  createContext,
  useState,
  useRef,
  useContext,
  useEffect,
} from 'react';
import { isEmpty } from 'lodash';
import { FORMATTERS } from '@constants';
import { getEmptyStaffObj } from '@utils';
import { AUTHOR_NAMES, DETAILS_KEYS } from './utils';

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

const initialConfig =
  JSON.parse(localStorage.getItem(FORMATTERS.ENGIRLS_WIKI_FORMATTER)) || {};

const getStaff = (value) => (isEmpty(value) ? [getEmptyStaffObj()] : value);

export const StateProvider = ({ children }) => {
  const [renders, setRenders] = useState({});
  const renderRef = useRef(renders);
  const [details, setDetails] = useState({
    [DETAILS_KEYS.WRITER]: AUTHOR_NAMES[0],
    [DETAILS_KEYS.LOCATION]: '',
    [DETAILS_KEYS.IMAGE]: '',
    ...initialConfig.details,
  });
  const [proofreaders, setProofreaders] = useState(
    getStaff(initialConfig.proofreaders),
  );
  const [translators, setTranslators] = useState(
    getStaff(initialConfig.translators),
  );
  const [nav, setNav] = useState(initialConfig.nav || {});
  const [isMainStoryNav, setIsMainStoryNav] = useState(
    initialConfig.isMainStoryNav || false,
  );

  // create refs for each CKEditor to pass into EditorContext
  const inputRef = useRef(null);
  const tlNotesRef = useRef(null);

  useEffect(() => {
    renderRef.current = renders;
  }, [renders]);

  return (
    <StateContext.Provider
      value={{
        details,
        details,
        inputRef,
        isMainStoryNav,
        nav,
        proofreaders,
        renderRef,
        renders,
        setDetails,
        setIsMainStoryNav,
        setNav,
        setProofreaders,
        setRenders,
        setTranslators,
        tlNotesRef,
        translators,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

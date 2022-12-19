import React from 'react';
import { partition } from 'lodash';
import { Toggle } from '@shared';
import { useStateContext } from '../StateContext';
import { NAV_KEYS } from '../utils';
import './NavContent.less';

const PropsForNavKey = {
  [NAV_KEYS.STORY_URL]: { label: 'Story URL', placeholder: 'Ex. Introduction' },
  [NAV_KEYS.PREV_URL]: { label: 'Prev URL', placeholder: 'Ex. Chapter 5' },
  [NAV_KEYS.PREV_TEXT]: {
    label: 'Prev Text',
    placeholder: 'Ex. 5 - The Rival Candidate - The Living God',
  },
  [NAV_KEYS.CURRENT_TEXT]: {
    label: 'Current Text',
    placeholder: 'Ex. 6 - The Rival Candidate - The Overlord',
  },
  [NAV_KEYS.NEXT_URL]: { label: 'Next URL', placeholder: 'Ex. Chapter 7' },
  [NAV_KEYS.NEXT_TEXT]: {
    label: 'Next Text',
    placeholder: 'Ex. 7 - The Rival Candidate - The Fallen Angel',
  },
  // Specific to main story
  [NAV_KEYS.PREV_STORY_URL]: {
    label: 'Prev Story URL',
    placeholder: 'Ex. Introduction',
  },
  [NAV_KEYS.NEXT_STORY_URL]: {
    label: 'Next Story URL',
    placeholder: 'Ex. Cooperation',
  },
};

const [MAIN_STORY_NAV_KEYS, REGULAR_NAV_KEYS] = partition(NAV_KEYS, (key) =>
  [NAV_KEYS.PREV_STORY_URL, NAV_KEYS.NEXT_STORY_URL].includes(key),
);

export const NavContent = () => {
  const { nav, setNav, isMainStoryNav, setIsMainStoryNav } = useStateContext();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNav({ ...nav, [id]: value });
  };

  const handleMainStoryNavToggleChange = (e) => {
    setIsMainStoryNav(!!e.target.checked);
  };

  let keys = Object.values(REGULAR_NAV_KEYS);
  if (isMainStoryNav) {
    keys = [...keys, ...MAIN_STORY_NAV_KEYS];
  }

  return (
    <>
      <MainStoryNavToggle
        checked={isMainStoryNav}
        onChange={handleMainStoryNavToggleChange}
      />
      <div className="tab-content__grid">
        {keys.map((key) => (
          <Row
            key={key}
            navKey={key}
            nav={nav}
            value={nav[key]}
            onChange={handleChange}
          />
        ))}
      </div>
    </>
  );
};

const MainStoryNavToggle = ({ checked, onChange }) => {
  const id = 'main-story-nav-toggle';

  return (
    <div className="main-story-nav-toggle">
      <label htmlFor={id}>Main Story</label>
      <Toggle checked={checked} onChange={onChange} id={id} />
    </div>
  );
};

const Row = ({ navKey, value, onChange }) => (
  <>
    <label className="row__label" htmlFor={navKey}>
      {PropsForNavKey[navKey].label}
    </label>
    <input
      type="text"
      id={navKey}
      value={value || ''}
      onChange={onChange}
      placeholder={PropsForNavKey[navKey].placeholder}
    />
  </>
);

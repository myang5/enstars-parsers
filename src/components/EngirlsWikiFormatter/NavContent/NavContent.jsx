import React from 'react';
import { Toggle } from '@shared';
import { useStateContext } from '../StateContext';
import { NAV_KEYS } from '../utils';
import './NavContent.less';

const LabelForNavKey = {
  [NAV_KEYS.STORY_URL]: 'Story URL',
  [NAV_KEYS.PREV_URL]: 'Prev URL',
  [NAV_KEYS.PREV_TEXT]: 'Prev Text',
  [NAV_KEYS.CURRENT_TEXT]: 'Current Text',
  [NAV_KEYS.NEXT_URL]: 'Next URL',
  [NAV_KEYS.NEXT_TEXT]: 'Next Text',
  // Specific to main story
  [NAV_KEYS.PREV_STORY_URL]: 'Prev Story URL',
  [NAV_KEYS.NEXT_STORY_URL]: 'Next Story URL',
};

export const NavContent = () => {
  const { nav, setNav, isMainStoryNav, setIsMainStoryNav } = useStateContext();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNav({ ...nav, [id]: value });
  };

  const handleMainStoryNavToggleChange = (e) => {
    console.log(e.target.checked);
    setIsMainStoryNav(e.target.checked);
  };

  const keys = Object.values(NAV_KEYS);

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
      {LabelForNavKey[navKey]}
    </label>
    <input type="text" id={navKey} value={value} onChange={onChange} />
  </>
);

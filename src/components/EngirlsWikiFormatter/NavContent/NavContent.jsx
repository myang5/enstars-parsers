import React from 'react';
import { useStateContext } from '../StateContext';
import classNames from 'classnames';
import { NAV_KEYS } from '../utils';

const LabelForNavKey = {
  [NAV_KEYS.STORY_URL]: 'Story URL',
  [NAV_KEYS.PREV_URL]: 'Prev URL',
  [NAV_KEYS.PREV_TEXT]: 'Prev Text',
  [NAV_KEYS.CURRENT_TEXT]: 'Current Text',
  [NAV_KEYS.NEXT_URL]: 'Next URL',
  [NAV_KEYS.NEXT_TEXT]: 'Next Text',
};

export const NavContent = () => {
  const { nav, setNav } = useStateContext();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNav({ ...nav, [id]: value });
  };

  const keys = Object.values(NAV_KEYS);

  return (
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
  );
};

const Row = ({ navKey, value, onChange }) => (
  <>
    <label className={classNames('row__spacer')} htmlFor={navKey}>
      {LabelForNavKey[navKey]}
    </label>
    <input type="text" id={navKey} value={value} onChange={onChange} />
  </>
);

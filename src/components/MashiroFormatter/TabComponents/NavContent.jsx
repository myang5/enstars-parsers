import React from 'react';
import { NAV_KEYS } from '../utils';
import { useStateContext } from '../Main/StateContext';

function NavContent() {
  const { nav, setNav } = useStateContext();

  const handleChange = (e) => {
    const {
      target: { id, value },
    } = e;
    setNav({ ...nav, [id]: value });
  };

  return (
    <>
      <p>
        Links for the navigation at the end of each chapter page. "Title" refers
        to the text that appears when hovering over each navigation button.
      </p>
      <div className="tab-content__grid">
        <Row
          nav={nav}
          navKey={NAV_KEYS.INDEX}
          label="Index URL"
          placeholder="Ex. /dead_end_land"
          onChange={handleChange}
        />
        <Row
          nav={nav}
          navKey={NAV_KEYS.PREV_URL}
          label="Prev URL"
          placeholder="Ex. /dead_end_land/6"
          onChange={handleChange}
        />
        <Row
          nav={nav}
          navKey={NAV_KEYS.PREV_TITLE}
          label="Prev Title"
          placeholder="Ex. Previous Chapter: Dead End Street (6)"
          onChange={handleChange}
        />
        <Row
          nav={nav}
          navKey={NAV_KEYS.NEXT_URL}
          label="Next URL"
          placeholder="Ex. /dead_end_land/8"
          onChange={handleChange}
        />
        <Row
          nav={nav}
          navKey={NAV_KEYS.NEXT_TITLE}
          label="Next Title"
          placeholder="Ex. Next Chapter: Epilogue (1)"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

const Row = ({ nav, navKey, label, onChange, placeholder }) => (
  <>
    <label className="row__label" htmlFor={navKey}>
      {label}
    </label>
    <input
      type="text"
      id={navKey}
      value={nav[navKey]}
      onChange={onChange}
      placeholder={placeholder}
    />
  </>
);

export default NavContent;

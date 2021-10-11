import React from 'react';
import { useStateContext } from '../Main/StateContext';
import { NAV_KEYS } from '../utils';

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
      <p>Links for the navigation at the end of each post.</p>
      <div className="tab-content__grid">
        <Row
          navKey={NAV_KEYS.ALL_URL}
          label="All Link"
          nav={nav}
          onChange={handleChange}
        />
        <Row
          navKey={NAV_KEYS.PREV_URL}
          label="Prev Link"
          nav={nav}
          onChange={handleChange}
        />
        <Row
          navKey={NAV_KEYS.NEXT_URL}
          label="Next Link"
          nav={nav}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

const Row = ({ nav, navKey, label, onChange }) => (
  <>
    <label className="row__spacer" htmlFor={navKey}>
      {label}
    </label>
    <input type="text" id={navKey} value={nav[navKey]} onChange={onChange} />
  </>
);

export default NavContent;

import React from 'react';
import { NAV_KEYS } from '@constants';
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
        Links for the navigation at the end of each chapter page.
        &quot;Title&quot; refers to the text that appears when hovering over
        each navigation button.
      </p>
      <div className="row">
        <label className="row__spacer" htmlFor={NAV_KEYS.INDEX}>
          Index URL
        </label>
        <input
          type="text"
          id={NAV_KEYS.INDEX}
          value={nav[NAV_KEYS.INDEX]}
          onChange={handleChange}
          placeholder="Ex. /dead_end_land"
        />
      </div>
      <div className="row">
        <label className="row__spacer" htmlFor={NAV_KEYS.PREV_URL}>
          Prev URL
        </label>
        <input
          type="text"
          id={NAV_KEYS.PREV_URL}
          value={nav[NAV_KEYS.PREV_URL]}
          onChange={handleChange}
          placeholder="Ex. /dead_end_land/6"
        />
      </div>
      <div className="row">
        <label className="row__spacer" htmlFor={NAV_KEYS.PREV_TITLE}>
          Prev Title
        </label>
        <input
          type="text"
          id={NAV_KEYS.PREV_TITLE}
          value={nav[NAV_KEYS.PREV_TITLE]}
          onChange={handleChange}
          placeholder="Ex. Previous Chapter: Dead End Street (6)"
        />
      </div>
      <div className="row">
        <label className="row__spacer" htmlFor={NAV_KEYS.NEXT_URL}>
          Next URL
        </label>
        <input
          type="text"
          id={NAV_KEYS.NEXT_URL}
          value={nav[NAV_KEYS.NEXT_URL]}
          onChange={handleChange}
          placeholder="Ex. /dead_end_land/8"
        />
      </div>
      <div className="row">
        <label className="row__spacer" htmlFor={NAV_KEYS.NEXT_TITLE}>
          Next Title
        </label>
        <input
          type="text"
          id={NAV_KEYS.NEXT_TITLE}
          value={nav[NAV_KEYS.NEXT_TITLE]}
          onChange={handleChange}
          placeholder="Ex. Next Chapter: Epilogue (1)"
        />
      </div>
    </>
  );
}

export default NavContent;

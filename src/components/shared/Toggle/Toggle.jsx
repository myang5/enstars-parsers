import classNames from 'classnames';
import React from 'react';
import './Toggle.less';

export const Toggle = ({ checked, id, onChange }) => {
  return (
    <div className="toggle">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="toggle-peer"
      />
      <div
        className={classNames('toggle-background', {
          'toggle-background-checked': checked,
        })}
      >
        <div
          className={classNames('toggle-button', {
            'toggle-button-checked': checked,
          })}
          // When the translate function is applied,
          // the button is given a new stacking context,
          // which puts it above the absolutely positioned hidden checkbox input.
          // Button also needs an onClick handler so that user can still click on
          // it when checked is true
          onClick={onChange}
        />
      </div>
    </div>
  );
};

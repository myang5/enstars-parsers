import React from 'react';
import { DETAILS_KEYS } from '../utils';
import { useStateContext } from '../Main/StateContext';
import classNames from 'classnames';

export function DetailContent() {
  const { details, setDetails } = useStateContext();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDetails({ ...details, [id]: value });
  };

  return (
    <>
      <div className="tab-content__grid">
        <Row keyForValue={DETAILS_KEYS.IMAGE} label="Image link">
          <input
            type="text"
            id={DETAILS_KEYS.IMAGE}
            value={details[DETAILS_KEYS.IMAGE] || ''}
            onChange={handleChange}
          />
        </Row>
      </div>
    </>
  );
}

const Row = ({ keyForValue, label, labelClassNames, children }) => (
  <>
    <label
      className={classNames('row__spacer', labelClassNames)}
      htmlFor={keyForValue}
    >
      {label}
    </label>
    {children}
  </>
);

import React from 'react';
import { useStateContext } from '../StateContext';
import './DetailContent.less';
import classNames from 'classnames';
import { getEmptyStaffObj } from '@utils';
import { AUTHOR_NAMES, DETAILS_KEYS } from '../utils';

export const DetailContent = () => {
  const {
    details,
    proofreaders,
    setDetails,
    setProofreaders,
    setTranslators,
    translators,
  } = useStateContext();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDetails({ ...details, [id]: value });
  };

  return (
    <div className="tab-content__grid">
      <Row keyForValue={DETAILS_KEYS.LOCATION} label="Location">
        <input
          type="text"
          id={DETAILS_KEYS.LOCATION}
          value={details[DETAILS_KEYS.LOCATION]}
          onChange={handleChange}
        />
      </Row>
      <Row keyForValue={DETAILS_KEYS.WRITER} label="Writer">
        <select
          id={DETAILS_KEYS.WRITER}
          value={details[DETAILS_KEYS.WRITER]}
          onChange={handleChange}
        >
          {AUTHOR_NAMES.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
      </Row>
      <Row keyForValue={DETAILS_KEYS.IMAGE} label="Header image link">
        <input
          type="text"
          id={DETAILS_KEYS.IMAGE}
          value={details[DETAILS_KEYS.IMAGE]}
          onChange={handleChange}
        />
      </Row>
      <div className="row__spacer" style={{ marginBottom: '-12px' }} />
      <div className="staff-column-labels" style={{ marginBottom: '-12px' }}>
        <label id="person-name-label">Name</label>
        <label id="person-credit-label">Link (optional)</label>
      </div>
      <StaffInputs
        staff={proofreaders}
        label="Proofreading"
        labelForClassName="proofreaders"
        onChange={setProofreaders}
      />
      <StaffInputs
        staff={translators}
        label="Translation"
        onChange={setTranslators}
      />
    </div>
  );
};

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

const StaffInputs = ({ staff, label, labelForClassName, onChange }) => {
  const handlePersonChange = (e) => {
    const { value, id } = e.target;
    const [_, key, idx] = id.split('_');
    const newStaff = [...staff];
    newStaff[idx] = { ...newStaff[idx], [key]: value };
    onChange(newStaff);
  };

  const handleAdd = () => {
    const newStaff = [...staff];
    newStaff.push(getEmptyStaffObj());
    onChange(newStaff);
  };

  return (
    <>
      <label
        className="row__spacer align-self-start"
        id={`${labelForClassName}-label`}
      >
        {label}
      </label>
      <div className="staff-grid">
        <>
          {staff.map((person, idx) => (
            <React.Fragment key={`${labelForClassName}_${idx}`}>
              <input
                type="text"
                aria-labelledby={`${labelForClassName}-label person-name-label`}
                id={`${labelForClassName}_${DETAILS_KEYS.NAME}_${idx}`}
                value={person[DETAILS_KEYS.NAME]}
                onChange={handlePersonChange}
              />
              <input
                type="text"
                aria-labelledby={`${labelForClassName}-label person-credit-label`}
                id={`${labelForClassName}_${DETAILS_KEYS.LINK}_${idx}`}
                value={person[DETAILS_KEYS.LINK]}
                onChange={handlePersonChange}
              />
            </React.Fragment>
          ))}
          <div>
            <button
              type="button"
              className="btn--add-person"
              onClick={handleAdd}
            >
              + Add
            </button>
          </div>
        </>
      </div>
    </>
  );
};

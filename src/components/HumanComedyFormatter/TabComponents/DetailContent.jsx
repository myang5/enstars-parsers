import React from 'react';
import classNames from 'classnames';
import { useStateContext } from '../Main/StateContext';
import { getEmptyStaffObj } from '@utils';
import { DETAILS_KEYS } from '@constants';
import './DetailContent.less';

export function DetailContent() {
  const {
    jpProofreaders,
    setJpProofreaders,
    engProofreaders,
    setEngProofreaders,
    translators,
    setTranslators,
  } = useStateContext();

  return (
    <>
      <div className="tab-content__grid">
        <div className="row__spacer" style={{ marginBottom: '-12px' }} />
        <div className="staff-column-labels" style={{ marginBottom: '-12px' }}>
          <label id="person-name-label">Name</label>
          <label id="person-credit-label">Link (optional)</label>
        </div>
        <StaffInputs
          staff={jpProofreaders}
          label="Proofreading (JP)"
          labelForClassName="jp-proofreaders"
          onChange={setJpProofreaders}
        />
        <StaffInputs
          staff={engProofreaders}
          label="Proofreading (ENG)"
          labelForClassName="eng-proofreaders"
          onChange={setEngProofreaders}
        />
        <StaffInputs
          staff={translators}
          label="Translation"
          onChange={setTranslators}
        />
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

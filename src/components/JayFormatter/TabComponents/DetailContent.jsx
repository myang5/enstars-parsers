import React from 'react';
import { DETAILS_KEYS, getEmptyStaffObj } from '../utils';
import { useStateContext } from '../Main/StateContext';
import './DetailContent.less';

const AUTHORS = [
  'Akira',
  'Yuuki Yoshino',
  'Nishioka Maiko',
  'Yuumasu',
  'Kino Seitaro',
  'Happy Elements K.K',
  'Umeda Chitose',
];

const SEASONS = ['Spring', 'Summer', 'Autumn', 'Winter'];

export default function DetailContent() {
  const {
    details,
    setDetails,
    jpProofreaders,
    setJpProofreaders,
    engProofreaders,
    setEngProofreaders,
    translators,
    setTranslators,
  } = useStateContext();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDetails({ ...details, [id]: value });
  };

  return (
    <div className="tab-content__grid">
      <Row keyForValue={DETAILS_KEYS.WRITER} label="Writer">
        <select
          id={DETAILS_KEYS.WRITER}
          value={details[DETAILS_KEYS.WRITER] || AUTHORS[0]}
          onChange={handleChange}
        >
          {AUTHORS.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
      </Row>
      <Row keyForValue={DETAILS_KEYS.SEASON} label="Season">
        <select
          id={DETAILS_KEYS.SEASON}
          value={details[DETAILS_KEYS.SEASON] || SEASONS[0]}
          onChange={handleChange}
        >
          {SEASONS.map((season) => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
        </select>
      </Row>
      <Row keyForValue={DETAILS_KEYS.CHARACTERS} label="Characters">
        <input
          type="text"
          id={DETAILS_KEYS.CHARACTERS}
          value={details[DETAILS_KEYS.CHARACTERS]}
          onChange={handleChange}
        />
      </Row>
      <StaffInputs
        staff={jpProofreaders}
        label="Proofreading (JP)"
        labelForClassName="jp-proofreaders"
        onChange={setJpProofreaders}
        showColumnLabels={true}
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
  );
}

const Row = ({ keyForValue, label, children }) => (
  <>
    <label className="row__spacer" htmlFor={keyForValue}>
      {label}
    </label>
    {children}
  </>
);

const StaffInputs = ({
  staff,
  label,
  labelForClassName,
  onChange,
  showColumnLabels,
}) => {
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
      {showColumnLabels && (
        <>
          <div className="row__spacer" />
          <div className="staff-column-labels">
            <label id={`${labelForClassName}-name-label`}>Name</label>
            <label id={`${labelForClassName}-credit-label`}>
              Link (optional)
            </label>
          </div>
        </>
      )}
      <label
        className="row__spacer staff-grid-label"
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
                aria-labelledby={`${labelForClassName}-label ${labelForClassName}-name-label`}
                id={`${labelForClassName}_${DETAILS_KEYS.NAME}_${idx}`}
                value={person[DETAILS_KEYS.NAME]}
                onChange={handlePersonChange}
              />
              <input
                type="text"
                aria-labelledby={`${labelForClassName}-label ${labelForClassName}-credit-label`}
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

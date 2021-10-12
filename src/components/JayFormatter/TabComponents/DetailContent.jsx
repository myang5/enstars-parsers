import React from 'react';
import { DETAILS_KEYS, getEmptyStaffObj } from '../utils';
import { useStateContext } from '../Main/StateContext';
import { BlockquoteEditor } from './CKEditor';
import './DetailContent.less';
import classNames from 'classnames';

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

export function DetailContent() {
  const {
    details,
    setDetails,
    characters,
    setCharacters,
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
    <>
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
            value={characters}
            onChange={(e) => setCharacters(e.target.value)}
          />
        </Row>
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
        <Row label="Blockquote" labelClassNames="align-self-start">
          <BlockquoteEditor />
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

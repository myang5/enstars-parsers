import React, { useContext } from 'react';
import { StateContext } from '../Main/StateContext';
import { AUTHOR_NAMES, DETAILS_KEYS, GAME_OPTIONS } from 'Constants';

const authors = Object.values(AUTHOR_NAMES);

export default function DetailContent() {
  const { details, setDetails } = useContext(StateContext);

  const handleChange = (e) => {
    const {
      target: { id, value },
    } = e;
    setDetails({ ...details, [id]: value });
  };

  const handleGameChange = (e) => {
    const {
      target: { value },
    } = e;
    setDetails({ ...details, [DETAILS_KEYS.WHAT_GAME]: value });
  };

  return (
    <>
      <h3>Story Details</h3>
      <div className="row">
        <label className="row__spacer" htmlFor={DETAILS_KEYS.LOCATION}>
          Location
        </label>
        <input
          type="text"
          id={DETAILS_KEYS.LOCATION}
          value={details[DETAILS_KEYS.LOCATION]}
          onChange={handleChange}
        />
      </div>
      <div className="row">
        <label className="row__spacer" htmlFor={DETAILS_KEYS.AUTHOR}>
          Writer
        </label>
        <select
          id={DETAILS_KEYS.AUTHOR}
          defaultValue={details[DETAILS_KEYS.AUTHOR]}
          onChange={handleChange}
        >
          {authors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
      </div>
      <PersonInput
        personTypeDetailKey={DETAILS_KEYS.TRANSLATORS}
        details={details}
        onChange={setDetails}
      />
      <PersonInput
        personTypeDetailKey={DETAILS_KEYS.EDITORS}
        details={details}
        onChange={setDetails}
      />
      <div className="row">
        <label className="row__spacer" htmlFor={DETAILS_KEYS.WHAT_GAME}>
          Game
        </label>
        <input
          type="radio"
          name={DETAILS_KEYS.WHAT_GAME}
          value={GAME_OPTIONS.GAME2}
          id={GAME_OPTIONS.GAME2}
          checked={details[DETAILS_KEYS.WHAT_GAME] === GAME_OPTIONS.GAME2}
          onChange={handleGameChange}
        />
        <label className="label--radio" htmlFor={GAME_OPTIONS.GAME2}>
          ES!!
        </label>
        <input
          type="radio"
          name={DETAILS_KEYS.WHAT_GAME}
          value={GAME_OPTIONS.GAME1}
          id={GAME_OPTIONS.GAME1}
          checked={details[DETAILS_KEYS.WHAT_GAME] === GAME_OPTIONS.GAME1}
          onChange={handleGameChange}
        />
        <label className="label--radio" htmlFor={GAME_OPTIONS.GAME1}>
          ES!
        </label>
      </div>
    </>
  );
}

function PersonInput({ personTypeDetailKey, details, onChange }) {
  const handlePersonChange = (e) => {
    const {
      target: { value, id },
    } = e;
    const [personType, key, idx] = id.split('_');
    const newArr = [...details[personType]];
    newArr[idx] = { ...newArr[idx], [key]: value };
    onChange({ ...details, [personType]: newArr });
  };

  const handleAdd = (e) => {
    const {
      target: { id },
    } = e;
    const [key] = id.split('_');
    const newArr = [...details[key]];
    newArr.push({ [DETAILS_KEYS.NAME]: '', [DETAILS_KEYS.LINK]: '' });
    onChange({ ...details, [key]: newArr });
  };

  const personLabel = personTypeDetailKey === DETAILS_KEYS.TRANSLATORS ? 'Translator' : 'Editor';
  return (
    <>
      <div className="row row--label-only">
        <span className="row__spacer" />
        <label className="row__half-width" id={`${personTypeDetailKey}-name-label`}>
          Name
        </label>
        <label className="row__half-width" id={`${personTypeDetailKey}-credit-label`}>
          Credit link/wiki username
        </label>
      </div>
      {details[personTypeDetailKey].map((person, idx) => (
        <div className="row row--person" key={`${personTypeDetailKey}_${idx}`}>
          {idx === 0 ? (
            <label className="row__spacer" id={`${personTypeDetailKey}-label`}>
              {personLabel}
            </label>
          ) : (
            <span className="row__spacer" />
          )}
          <input
            className="row__half-width"
            type="text"
            aria-labelledby={`${personTypeDetailKey}-label ${personTypeDetailKey}-name-label`}
            id={`${personTypeDetailKey}_${DETAILS_KEYS.NAME}_${idx}`}
            value={person[DETAILS_KEYS.NAME]}
            onChange={handlePersonChange}
          />
          <input
            className="row__half-width"
            type="text"
            aria-labelledby={`${personTypeDetailKey}-label ${personTypeDetailKey}-credit-label`}
            id={`${personTypeDetailKey}_${DETAILS_KEYS.LINK}_${idx}`}
            value={person[DETAILS_KEYS.LINK]}
            onChange={handlePersonChange}
          />
        </div>
      ))}
      <div className="row">
        <span className="row__spacer" />
        <button
          type="button"
          className="btn--add-person"
          id={`${personTypeDetailKey}_add-person`}
          onClick={handleAdd}
        >
          + Add
        </button>
      </div>
    </>
  );
}

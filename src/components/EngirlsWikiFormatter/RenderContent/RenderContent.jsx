import React from 'react';
import { useStateContext } from '../StateContext';

export const RenderContent = () => {
  const { renders, setRenders } = useStateContext();

  const handleChange = (e) => {
    const newState = { ...renders, [e.target.id]: e.target.value };
    setRenders(newState);
  };

  return (
    <>
      <p>
        Paste in the file names of the dialogue renders as written in the wiki
        (ex. Aika Aino School Dialogue Render.png)
      </p>
      <p> This tab will fill out once you paste dialogue into the Text tab.</p>
      <div className="tab-content__grid">
        {Object.entries(renders).map(([name, render]) => (
          <Row key={name} name={name} value={render} onChange={handleChange} />
        ))}
      </div>
    </>
  );
};

const Row = ({ name, value, onChange }) => {
  return (
    <>
      <label className="row__label" htmlFor={name}>
        {name}
      </label>
      <input type="text" id={name} onChange={onChange} value={value} />
    </>
  );
};

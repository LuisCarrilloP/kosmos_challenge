import React from 'react';
import { FormContext } from '../../FormContext';
import { useContext  } from 'react';

const Options = ({f_id, label, value}) => {

  const { handleChange } = useContext(FormContext)

  return (
    <div className="mb-3">
      <p>{label}</p>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={value} onChange={event => handleChange(f_id, event)}/>
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultValue="checked"/>
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          No
        </label>
      </div>
    </div>
  );
};

export default Options;
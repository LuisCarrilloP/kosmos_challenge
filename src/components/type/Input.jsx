import React from 'react';
import { FormContext } from '../../FormContext';
import { useContext  } from 'react';

const Input = ({f_id, label, placeholder, value, inputType }) => {

  const { handleChange } = useContext(FormContext)

  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">{label}</label>
      <input type={inputType} className="form-control" id="exampleFormControlInput1" placeholder={placeholder ? placeholder : ''} value={value || ''} onChange={event => handleChange(f_id, event)}/>
    </div>
  );
};

export default Input;
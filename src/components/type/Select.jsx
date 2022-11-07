import React from 'react';
import { FormContext } from '../../FormContext';
import { useContext  } from 'react';

const Select = ({f_id, label, placeholder, value, options}) => {

  const { handleChange } = useContext(FormContext)

  return (
    <>
      <label htmlFor="selectForm">{label}</label>
      <select className="form-select" aria-label="Default select example" id="form-select" onChange={event => handleChange(f_id, event)}>
        <option>Select years of experience</option>
        {
          options.map((option, i) => 
            <option value={option.option_label} key={i}>{option.option_label}</option>
          )
        }
          
      </select>
    </>
  );
};

export default Select;
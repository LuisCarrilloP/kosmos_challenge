import React from 'react';
import Input from './type/Input';
import Options from './type/Options';
import Select from './type/Select';

const Element = ({field: { type, f_id, label, placeholder, value, options, inputType }}) => {

  switch (type) {
    case "text":
      return(<Input 
        f_id={f_id}
        label={label}
        placeholder={placeholder}
        value={value}
        inputType={inputType}
      />)
    case "select":
      return(<Select
        f_id={f_id}
        label={label}
        placeholder={placeholder}
        value={value}
        options={options}
      />)
    case "options":
      return(<Options
        f_id={f_id}
        label={label}
        value={value}
      />)
  
    default:
      return null
  }

};

export default Element;
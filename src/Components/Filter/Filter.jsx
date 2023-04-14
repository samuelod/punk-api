import React, { useState } from 'react';
import './Filter.scss';

const Filter = (props) => {
    const {filter, handleCheck} = props;

    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        handleCheck(filter, !checked);
        setChecked(!checked);
    };
    const { label, value} = filter;

  return (
    <div className='filter__Item'>
        <label>{label}</label>
        <input type="checkbox" value={value} onClick={handleChange} />
    </div>
  );
};

export default Filter;
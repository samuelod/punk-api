import React from 'react';
import './SearchBar.scss';


const SearchBar = (props) => {
    const {placeholder, handleChange} = props;
  return (
    <div className='searchBar'>
        <input type="text" placeholder={placeholder} onChange = {handleChange} />
    </div>
  );
};

export default SearchBar
import React from 'react';
import './Nav.scss';
import SearchBar from '../SearchBar/SearchBar';
import FilterList from '../FilterList/FIlterList';
import beerlogo from '../../Assets/images/beerlogo.svg';

const Nav = (props) => {
    const { filters, handleChange, handleCheck} = props;
  return (
    <section className='nav__Side'>
        <div className='nav__Content'>
            <div className='nav__Logo'>
                <img src={beerlogo} alt="beer logo" />
            </div>
            <SearchBar placeholder="Search" handleChange={handleChange}/>
            <FilterList filters={filters} handleCheck={handleCheck} />
        </div>
    </section> 
  );
};

export default Nav;
import React from 'react';
import './Main.scss';
import BeerList from '../BeerList/BeerList';

const Main = (props) => {
    const { beers, filters, searchTerm } = props; 
  return (
    <>
        <BeerList beers={beers} searchTerm={searchTerm} filters={filters} />
    </>
  );
};

export default Main;
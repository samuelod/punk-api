import React from 'react';
import "./BeerList.scss";
import BeerCard from '../BeerCard/BeerCard';

const BeerList = (props) => {
    const { beers, filters, searchTerm } = props;
    const check = filters.filter((condition) => condition.isChecked).map((condition) => condition.value);

    const results = beers
    //SEARCH FILTER
    .filter((beer) => beer.name.toLowerCase().includes(searchTerm.toLowerCase()))
    //FILTER BEER BY ABV, PH, AND YEAR
    .filter((beer) => (check.includes("abv") ? beer.abv > 6 : beer))
    .filter((beer) => (check.includes("acidic") ? beer.ph < 4 : beer))
    .filter((beer) => (check.includes("classic") ? beer.first_brewed.slice(-4) < 2010 : beer))

    .map((beer) => <BeerCard key={beer.id} beer={beer} />);

  return <section className='beer__List'>{results}</section>;  
};

  
export default BeerList
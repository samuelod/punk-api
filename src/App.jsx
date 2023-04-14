import React, { useEffect, useState } from 'react';
import './App.scss';
import Nav from './Components/Nav/Nav';
import Head from './Components/Head/Head';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [filters, setFilters] = useState([
    { value: "abv", label: "High PBV (> 6.0%)", isChecked: false},
    { value: "classic", label: "Classic Range", isChecked: false},
    { value: "acidic", label: "Acidic (pH < 4)", isChecked: false},
  ]);

  const handleChange = (e) => setSearchTerm(e.target.value);

  const handleCheck = (filter, isChecked) => {
    const filtersCopy = Object.assign([], filters);
    const index = filters.findIndex((f) => f.value === filter.value);
    filtersCopy[index].isChecked = isChecked;
    setFilters(filtersCopy);
  };


  const fetchBeers = () => {
    fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80")
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.log(error));
  };

 
 useEffect(() => {fetchBeers();},[]);

  return (
    <>
      <Nav filters={filters} handleChange={handleChange} handleChecked={handleCheck} />
      <Head beers={beers} searchTerm={searchTerm} filters={filters} />
    </>
  );
}


export default App

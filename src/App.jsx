import React, { useEffect, useState } from 'react';
import './App.scss';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';


const App = () => {
  const [beers, setBeers] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");

  //THE FILTERS THAT WILL BE CHECKED ON/OFF FOR FILTERING THE DATA 
  const [filters, setFilters] = useState([
    { value: "abv", label: "High ABV (> 6.0%)", isChecked: false},
    { value: "classic", label: "Classic Range", isChecked: false},
    { value: "acidic", label: "Acidic (pH < 4)", isChecked: false},
  ]);

  const onChange = (e) => setSearchTerm(e.target.value); //Sets search term to value the user inputs 
 
  //Sets the filters that are being applied upon filter being used
  const handleCheck = (filter, isChecked) => {
    const filtersCopy = Object.assign([], filters);
    const index = filters.findIndex((f) => f.value === filter.value);
    filtersCopy[index].isChecked = isChecked;
    setFilters(filtersCopy);
  };

//FETCH BEERS FROM PUNK API 
  const fetchBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json()) 
      .then((data) => setBeers(data)) //Add beers recieved to setBeers Array 
      .catch((error) => console.log(error));
  };

 //GET BEERS WHEN PAGE LOADS 
 useEffect(() => {fetchBeers();},[]);

  return (
    <>
      <Nav filters={filters} onChange={onChange} handleCheck={handleCheck} />
      <Main beers={beers} searchTerm={searchTerm} filters={filters} />
    </>
  );
}


export default App

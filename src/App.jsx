import React from 'react';
import './App.scss';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import BeerList from './Components/BeerList/BeerList';
// import BeerInfo from './Components/BeerInfo/BeerInfo';
import Filter from './Components/Filter/Filter';
import Header from './Components/Header/Header';
// import Nav from './Components/Nav/Nav';
import SearchBar from './Components/SearchBar/SearchBar';
import beerlogo from "./Assets/images/beerlogo.svg";


const App = () => {

  return (
    <div className='App'>
     <img src={beerlogo} alt="beer-logo" className='logo'/>
      < Header />
        < SearchBar />
        <Filter />
    </div>
  )
}

export default App;

import React from 'react';
import './App.scss';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import BeerList from './Components/BeerList/BeerList';
// import BeerInfo from './Components/BeerInfo/BeerInfo';
import Filter from './Components/Filter/Filter';
import Header from './Components/Header/Header';
// import Nav from './Components/Nav/Nav';
import SearchBar from './Components/SearchBar/SearchBar';


const App = () => {

  return (
    <div className='App'>
      < Header />
        < SearchBar />
        <Filter />
    </div>
  )
}

export default App;

import React from 'react'
import './SearchBar.scss'

const SearchBar = (props) => {

    const {searchTerm, handleInput} = props
    
  return (
    <div className='searchBar'>
        <input type="text" value={searchTerm} onChange={handleInput} placeholder="Search" />
    </div>
  )
}

export default SearchBar
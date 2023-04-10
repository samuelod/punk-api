import React from 'react'
import './Filter.scss'

const Filter = (props) => {

    const {filterByABV, filterByYear, filterByPH} = props


  return (
    <div className='filterSection'>
        <p>Filter: </p>
        <div className='filterList'>
            <div className='filterType'>
                <input onClick={filterByABV} type="checkbox" id='abv' />
                <label htmlFor="abv">High ABV (&rsaquo; 6.0%)</label>
            </div>
            <div className='filterType'>
                <input onClick={filterByYear} type="checkbox" id='year' />
                <label htmlFor="year">Classic Range</label>
            </div>
            <div className='filterType'>
                <input onClick={filterByPH} type="checkbox" id='ph' />
                <label htmlFor="ph">High ABV (ph &lsaquo; 4)</label>
            </div>
        </div>
    </div>
  )
}

export default Filter
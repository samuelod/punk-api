import React from 'react';
import "./FilterList.scss";
import Filter from '../Filter/Filter';

const FilterList = (props) => {
    const {filters, handleCheck} = props;
    const getFilter = (filter, index) => (
        <div className={index}>
            <Filter filter={filter} handleCheck={handleCheck} />
        </div>
    );

  return (
    <section className='filter__List'>
        <h4>Filter by:</h4>
        {filters.map(getFilter)}
    </section>  
  );
};

export default FilterList;
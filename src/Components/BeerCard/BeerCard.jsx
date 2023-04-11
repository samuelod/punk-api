import React from 'react'
import './BeerCard.scss'

const BeerCard = (props) => {
    const summary = (description) => {
        return description.length < 180 ? description : description.substring(0, description.lastIndexOf(".", 180)) + ".";

}
    const {beer} = props
    const {name, description, image_url, abv} = beer;
  return (
    <div className='beerCard'>
      <img src={image_url} alt={name} />
    <div className='beerName'>
        <h2>{name.split("-")[0]}</h2>
    </div>
    <span>ABV {abv}%</span>
    <p>{summary(description)}</p>

    </div>
  );
};

export default BeerCard
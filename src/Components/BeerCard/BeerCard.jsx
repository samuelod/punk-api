import React from 'react';
import "./BeerCard.scss";

const BeerCard = (props) => {
    const summary = (description) => {
        return description.length < 190 ? description : description.substring(0, description.lastIndexOf(".", 190)) + ".";
    }

    const {beer} = props
    const { image_url, name, abv, description } = beer;
  return (
    <div className='beer__Card'>
        <img src={image_url} alt={name} />
        <div className='beer__Name'>
            <h2>{name.split("-")[0]}</h2> 
        </div>
        <span>ABV {abv}%</span>
        <p>{summary(description)}</p>
    </div>
  );
};

export default BeerCard;
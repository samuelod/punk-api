import React from 'react'
import './BeerCard.scss'

const BeerCard = (props) => {
    const {name, tagline, firstBrewed, img, abv, ph } = props
  return (
    <div className='beer__Card'>
        <img src={img} alt="Beer Picture" className='beer__Picture' />
        <h1 className='beer__Name'>{name}</h1>
        <p className='beer__Tagline'>{tagline}</p>
        <p>First Brewed: <b>{firstBrewed}</b></p>
        <h5>ABV: {abv}</h5>
        <h5>pH: {ph}</h5>    
    </div>
  )
}

export default BeerCard
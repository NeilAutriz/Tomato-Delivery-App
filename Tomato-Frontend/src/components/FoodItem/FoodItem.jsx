import React from 'react'
import './FoodItem.css'
import ratingStars from '../../assets/frontend_assets/rating_starts.png'

const FoodItem = ({name, image, price, description, category}) => {
  return (
    <div className='food-item-container'>
        <div className="food-item-image-container">
            <img src={image} className='food-image'/>
        </div>
        <div className="food-details">
            <div className="food-header">
                <p className='food-name'>{name}</p>
                <img src={ratingStars} className='food-rating'/>
            </div>
            <p className='food-description'>{description}</p>
            <p className='food-price'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem

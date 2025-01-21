import React, { useContext, useState } from 'react'
import './FoodItem.css'
import ratingStars from '../../assets/frontend_assets/rating_starts.png'
import {assets} from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({name, image, price, description, category, id}) => {
  
  const { cartContainer, addCart, removeCart } = useContext(StoreContext);

  return (
    <div className='food-item-container'>
        <div className="food-item-image-container">
          <img src={image} className='food-image'/>
          {!(cartContainer[id]) ? <img src={assets.add_icon_white} className='add-icon-start'
          onClick={() => addCart(id)}/>
          : <div className='counter-container'> 
              <img src={assets.remove_icon_red} className='remove-count-icon'
              onClick={() => removeCart(id)}/>
              <p className='count-text'>{cartContainer[id]}</p>
              <img src={assets.add_icon_green} className='add-count-icon'
              onClick={() => addCart(id)}/>
            </div>  
          }
        
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

import React, { useState } from 'react'
import './FoodItem.css'
import ratingStars from '../../assets/frontend_assets/rating_starts.png'
import {assets} from '../../assets/frontend_assets/assets'

const FoodItem = ({name, image, price, description, category}) => {
  
  const [count, setCount] = useState(0);
  
  return (
    <div className='food-item-container'>
        <div className="food-item-image-container">
          <img src={image} className='food-image'/>
          {count === 0 ? <img src={assets.add_icon_white} className='add-icon-start'
          onClick={() => setCount(count+1)}/>
          : <div className='counter-container'> 
              <img src={assets.remove_icon_red} className='remove-count-icon'
              onClick={() => setCount(count-1)}/>
              <p className='count-text'>{count}</p>
              <img src={assets.add_icon_green} className='add-count-icon'
              onClick={() => setCount(count + 1)} />
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

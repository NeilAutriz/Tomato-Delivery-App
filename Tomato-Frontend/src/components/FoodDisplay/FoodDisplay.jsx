import React from 'react'
import FoodItem from '../FoodItem/FoodItem'
import '../FoodDisplay/FoodDisplay.css'

const FoodDisplay = ({food_list}) => {
  return (
    <div className='food-list-container'>
        <h1>Top dishes near you</h1>
        <div className="food-list-group">
            {food_list.map((item, index) => {
                return(
                  <FoodItem key={index} name={item.name} image={item.image}
                    price={item.price} description={item.description} category={item.category} id={item._id} />
                )
            })}
        </div>
    </div>
  )
}

export default FoodDisplay;

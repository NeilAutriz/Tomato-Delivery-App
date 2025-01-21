import React from 'react'
import './HomePage.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/Exploremenu'
import { useState } from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const HomePage = () => {
    const [category, setCategory] = useState('All') 
    const {food_list} = useContext(StoreContext);

  return (
    <div className='home-container'>
        {console.log(food_list)}
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay food_list={food_list}/>
    </div>
  )
}

export default HomePage

import React from 'react'
import './HomePage.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/Exploremenu'
import { useState } from 'react'


const HomePage = () => {
    const [category, setCategory] = useState('All') 


  return (
    <div className='home-container'>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default HomePage

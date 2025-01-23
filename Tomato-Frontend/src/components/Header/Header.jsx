import React from 'react'
import './Header.css'

const Header = () => {


  return (
    <div className='header-container'>
      <div className="detail-container">
        <h2>Order your favorite food here</h2>
        <p>Choose from a diverse menu featuring a deletable array of decades of dishes crafted with the finest ingredients and culinary
        expertise. Our mission is to satisfy and elevate your dining experinece, one delicious meal at a time.</p>
        <a href='#menu'className='view-menu-button' >View Menu</a>
      </div>
    </div>
  )
}

export default Header

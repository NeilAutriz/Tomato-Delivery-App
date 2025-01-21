import { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './Navbar.css'

const Navbar = () => {
  const [navlink, setNavlink] = useState('mobile-app')

  return (
    <div className='nav-container'>
      <div className="nav-logo">
            <img src={assets.logo} className='logo-image'/>              
      </div>

      <ul className='navigation-links'>
        <li className={navlink === 'home' ? 'active' : ''}
          onClick={() => setNavlink('home')}>
          home
        </li>
        <li className={navlink === 'menu' ? 'active' : ''}
          onClick={() => setNavlink('menu')}>
          menu
        </li>
        <li className={navlink === 'mobile-app' ? 'active' : ''}
          onClick={() => setNavlink('mobile-app')}>
          mobile-app
        </li>
        <li className={navlink === 'contact' ? 'active' : ''}
        onClick={() => setNavlink('contact')}>
          contact us
        </li>
      </ul>
      
      <div className="search-containers">
        <img src={assets.search_icon} className='search-icon' />
        <div className="basket-icon-component">
          <img src={assets.basket_icon} className='basket-icon' />
          <div className="dot" />
        </div>

        <button className='sign-in-button'>sign in</button>
      </div>

    </div>
  )
}

export default Navbar
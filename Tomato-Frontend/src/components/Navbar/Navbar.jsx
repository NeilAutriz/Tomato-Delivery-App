import { useContext, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowSignIn}) => {
  const [navlink, setNavlink] = useState('mobile-app')
  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='nav-container'>
      <div className="nav-logo">
        <Link to='/'>
          <img src={assets.logo} className='logo-image' />  
        </Link>
      </div>

      <ul className='navigation-links'>
        <Link to='/'className={navlink === 'home' ? 'active' : ''}
          onClick={() => setNavlink('home')}>
          home
        </Link>
        <a href='#menu' className={navlink === 'menu' ? 'active' : ''}
          onClick={() => setNavlink('menu')}>
          menu
        </a>
        <a href='#mobile-app'className={navlink === 'mobile-app' ? 'active' : ''}
          onClick={() => setNavlink('mobile-app')}>
          mobile-app
        </a>
        <a href='#footer' className={navlink === 'contact' ? 'active' : ''}
        onClick={() => setNavlink('contact')}>
          contact us
        </a>
      </ul>
      
      <div className="search-containers">
        <img src={assets.search_icon} className='search-icon' />
        <div className="basket-icon-component">
          <Link to='/cart'>
            <img src={assets.basket_icon} className='basket-icon' />
          </Link>
          {getTotalCartAmount() === 0 ? <></> : <div className="dot" />}
        </div>
        <button className='sign-in-button'
        onClick={() => setShowSignIn(true)}>sign in</button>
      </div>



    </div>
  )
}

export default Navbar
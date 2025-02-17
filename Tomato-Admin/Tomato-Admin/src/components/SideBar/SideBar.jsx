import '../SideBar/SideBar.css'
import React from 'react'
import { assets } from '../../assets/admin_assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    return(
            <div className="side-bar-menu">
                <NavLink to='/add' className="side-bar-component">
                    <img src={assets.add_icon} className='side-bar-image'/>    
                    <p className='side-bar-label'>Add Items</p> 
                </NavLink>
                
                <NavLink to='/list' className="side-bar-component">
                    <img src={assets.order_icon} className='side-bar-image'/>    
                    <p className='side-bar-label'>List Items</p> 
                </NavLink>

                <NavLink to='/order' className="side-bar-component">
                    <img src={assets.order_icon} className='side-bar-image'/>    
                    <p className='side-bar-label'>Orders</p> 
                </NavLink>
            </div>
    )
}

export default SideBar;
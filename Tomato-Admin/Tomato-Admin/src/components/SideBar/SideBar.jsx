import '../SideBar/SideBar.css'
import React from 'react'
import { assets } from '../../assets/admin_assets/assets'

const SideBar = () => {
    return(
        <div className="side-bar-container">
            <div className="side-bar-menu">
                <div className="side-bar-component">
                    <img src={assets.add_icon} className='side-bar-image'/>    
                    <p className='side-bar-label'>Add Items</p> 
                </div>
                
                <div className="side-bar-component">
                    <img src={assets.order_icon} className='side-bar-image'/>    
                    <p className='side-bar-label'>List Items</p> 
                </div>

                <div className="side-bar-component">
                    <img src={assets.order_icon} className='side-bar-image'/>    
                    <p className='side-bar-label'>Orders</p> 
                </div>
            </div>
        </div>
    )
}

export default SideBar;
import '../NavBar/NavBar.css'
import { assets } from '../../assets/admin_assets/assets'
import React from "react";

const NavBar = () => {
    return(
        <div className="nav-bar-container">
            <div className="nav-admin-left">
                <img src={assets.logo} className='admin-logo' alt='tomato-logo'/>
            </div>

            <div className="nav-admin-right">
                <img src={assets.profile_image} className='admin-profile' alt='admin-logo'/>
            </div>
        </div>
    )
}

export default NavBar;
import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download-container'>
        <h1>For Better Experience Download <br />Tomato App</h1>
        <div className="store-container">
            <img className='download-store' src={assets.play_store} alt="playstore" />
            <img className='download-store' src={assets.app_store} alt="appstore" />  
        </div>
    </div>
  )
}

export default AppDownload
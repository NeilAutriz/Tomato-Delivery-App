import React, { useState } from 'react'
import './Signin.css'
import { assets } from '../../assets/frontend_assets/assets';

const SignIn = ({setShowSignIn}) => {

    const [authStatus, setAuthStatus] = useState('login');

  return (
      <div className='auth-main-container'>
        <div className="auth-box-container">
        <div className="auth-header">
            <img src={assets.logo} />      
            {authStatus === 'login' ? <h2>Login</h2> : <h2>Sign up</h2>}
            <img src={assets.cross_icon} className='close-icon'
            onClick={() => setShowSignIn(false)}/>  
        </div>

        <form className="auth-form-container">
            {authStatus === 'login' ? 
            <div className='login-inputs-container'>          
            <input className='email-input' type='text' required placeholder='Enter email' />
            <input className='password-input' type='password' required placeholder='Password' />
            </div>
            : <div className='signup-inputs-container'>
            <input className='name-input' type='text' required placeholder='Enter full name' />
            <input className='email-input' type='text' required placeholder='Enter email' />
            <input className='password-input' type='password' required placeholder='Enter password'/></div>
            }

            <div className="terms-privacy-contain">
                <input type='checkbox' required className='terms-service-input' />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            
                {authStatus === 'login' ? <button className='login-button'>Login</button> : <button className='sign-up-button'>Sign up</button>}
                  
            {authStatus === 'login' ? 
                <p>Create a new account?
                      <span onClick={() => setAuthStatus('signup')} className='span-signup'>Click here</span>
                </p>
                :
                <p>Already have an account?
                    <span onClick={() => setAuthStatus('login')} className='span-login'>Login here</span>
                </p>
            }
        </form>
        </div>
    </div>
  )
}

export default SignIn
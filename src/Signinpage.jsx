import React from 'react'
import './Signinpage.css'
import logo from './assets/logo2.png'
import background from './assets/background.jpg';
import { useNavigate } from 'react-router-dom';

const Signinpage = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="background1">
      <nav className="nav">
            <div className="logo">
                <img src={logo} alt="logo" />  
            </div>
        </nav>
        <div className="signn-in">
            <h1>Sign In</h1>
            <div className="main">
                 <input type='email' placeholder='Email or mobile number'></input>
                <input type='password' placeholder='Password'></input>
            </div>
            <button>Sign In</button>
            <div className="or">
                <p>OR</p>
              </div> 
            <div className="codebtn">
              <button>Use a sign-in code</button>
            </div>
            <div className="pass">
              <a href="#">Forgot password?</a>
            </div>
            <div className="down">
              <input type='checkbox' placeholder='Remember me'></input>
              <p>New to Netflix?<span><a href="#" onClick={()=>navigate('/')}>Sign up Now.</a></span></p>
            </div>
            <div className="maxdown">
              <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
              <a href="#">Learn more</a>
            </div>
        </div>
    </div>
    </>
  )
}
export default Signinpage;

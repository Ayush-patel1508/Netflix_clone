import React from 'react'
import logo from './assets/logo2.png'
import background from './assets/background.jpg';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
const navigate = useNavigate();
  return (
    <>
        <div className="background">
           <div className="nav">
                <div className="logo">
                <img src={logo} alt="logo" />
                </div>
        <div className="nav-right">
            {/* <div className="icon">
                <i className="bi bi-translate position-absolute top-50 start-0 translate-middle-y ms-3 text-white"></i> 
            </div> */}
                <select className="select">
                    <option selected>English</option>
                    <option value="1">Hindi</option>
                </select>
            <div className="signbtn">
                <button onClick={()=>navigate('/signin')}>Sign In</button>
            </div>
        </div>
            </div>
            <div className="hero-section">
                <div className="hero-text">
                <h1>Unlimited movies, TV 
                    <span>shows and more</span>
                </h1>
                <h3>Starts at ₹149. Cancel at any time.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="email-box">
                    <input type='email' placeholder='Email address'></input>
                    <button>Get Started<i class="bi bi-chevron-right"></i></button>
                </div>
            </div>
            </div> 
     </div>
    </>
  )
}
export default Navbar;  

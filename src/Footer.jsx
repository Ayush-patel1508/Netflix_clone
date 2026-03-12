import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footermain">
        <p>Questions? Call <span>000-800-919-1743</span></p>
        <div className="footlist">
            <div className="list1">
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Speed Test</a></li>
                </ul>
            </div>
            <div className="list1">
                <ul>
                     <li><a href="#">Help Centre</a></li>
                     <li><a href="#">Jobs</a></li>
                     <li><a href="#">Cookie Preferences</a></li>
                     <li><a href="#">Legal Notices</a></li>
                </ul>
            </div>
               <div className="list1">
                <ul>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Ways to Watch</a></li>
                    <li><a href="#">Corporate Information</a></li>
                    <li><a href="#">Only on Netflix</a></li>
                </ul>
            </div>
               <div className="list1">
                <ul>
                    <li><a href="#">Media Centre</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
        <select className="select1">
            <option selected>English</option>
            <option value="1">Hindi</option>
        </select>
        <div className="copyright">
            <p>Netflix India</p>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span><a href="#">Learn more.</a></span></p>
        </div>
      </div>
    </>
  )
}

export default Footer

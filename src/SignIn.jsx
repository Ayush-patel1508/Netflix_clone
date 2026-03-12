import React from 'react'
import './Signin.css' 

const SignIn = () => {
  return (
    <>
      <div className="signin">
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="signsection">
            <input type='email' placeholder='Email address'></input>
            <button>Get Started<i class="bi bi-chevron-right"></i></button>
        </div>
      </div>
    </>
  )
}
export default SignIn

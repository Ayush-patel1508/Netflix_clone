import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom';
import Signinpage from './Signinpage';
import Navbar from './Navbar';
import Trending from './Trending';
import Reason from './Reason';
import Accordian from './Accordian';
import SignIn from './SignIn';
import Footer from './Footer';

const Export = () => {
  return (
    <div>
       <Routes>
            <Route path="/" element={
                <>
            <Navbar />
            <Trending/>
            <Reason/>
            <Accordian/>
            <SignIn/>
            <Footer/>
          </>
            }/>
            <Route path="/signin" element={<Signinpage/>} />
        </Routes>
    </div>
  )
}
export default Export;

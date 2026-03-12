import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Trending from './Trending.jsx'
import Reason from './Reason.jsx'
import Accordian from './Accordian.jsx'
import SignIn from './SignIn.jsx'
import Footer from './Footer.jsx'
import Signinpage from './Signinpage.jsx'
import Export from './Export.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
    <Export/>
  </BrowserRouter>
  </>
)

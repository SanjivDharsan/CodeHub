import React, { useState, useEffect } from 'react';
import Navbar from '../Layout/Navbar';
import './Home.css';
import { animateScroll as scroll } from 'react-scroll';
import '../Layout/DropdownMenu';
import codehubboy from './CodeHubBoy.png'
import Button from '@mui/material/Button';
// import './Backgroundanime.css'
// import VideoHome from './VideoHome';


const Home = () => {
  const [agenda, setAgenda] = useState('');
  const [index, setIndex] = useState(0);
  const [showSecondaryText, setShowSecondaryText] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const agendaText = "Learn How To <.Code/> ";

  useEffect(() => {
    const interval = setInterval(() => {
      setAgenda(agendaText.substring(0, index));
      setIndex((prevIndex) => prevIndex + 0.65);
    }, 100); 

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    if (agenda === agendaText) {
      setShowSecondaryText(true);
    }
  }, [agenda]);

  // useEffect(() => {
  //   const cursorInterval = setInterval(() => {
  //     setShowCursor((prev) => !prev);
  //   }, 500); // Adjust the blinking speed here

  //   return () => clearInterval(cursorInterval);
  // }, []);
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const [isLoggedIn, setIsLoggedIn] = useState(!!loggedInUser);

  const handleLogout = () => {
    // Clear the logged-in user from local storage
    localStorage.removeItem('loggedInUser');
    // Update the state to indicate the user is logged out
    setIsLoggedIn(false);
  };
  const scrollToTop = () => {
    scroll.scrollToTop(); 
  };

  return (
    <div style={{color:"#334155"}}>
      <Navbar />
      {/* <VideoHome/> */}
      <div className='Homepotent'>
        <div className="Homecontainer" >
          <div className='photo'>
            <div className='h1photo'>
              {showCursor && <span className="cursor">|</span>}
            </div>
            <h1 className="font">{agenda}</h1>
            <span className={`secondary-text ${showSecondaryText ? 'show' : ''}`} ><img src={codehubboy} style={{alignSelf:"right"}} alt=""/></span>
          </div>
          <div className={`secondary-text ${showSecondaryText ? 'show' : ''}`}>
            <br/>
            <center><h1 className='freak'>Become the coding freak and flex😎</h1></center>
            <br/>
          </div>
        </div>
      </div>
      <div className='Roadmap'>
      <center><h1  className='Roadmaph1'style={{fontSize:"180px"}}>Confused where to Start??</h1></center>
      <center><h1 style={{fontSize:"85px"}}>To become a web developer, start with the subjects below,in the following order:</h1></center><br/>
      <div className='Map' style={{bacKground:"#52525b"}}><div className='HTML'>
        <div className='HTML-left' onClick={() => window.location.href="/html"}>HTML</div>
        <div className='HTML-right'  onClick={() => window.location.href="/html"}><h1 style={{fontSize:"50px"}}><center>Create your first web page</center></h1><br/><span style={{fontSize:"20px"}}><center>The first thing you have to learn, is HTML, which is the standard markup language for creating web pages.</center></span></div>
      </div><br/><br/>
      <div className='CSS'>
        <div className='CSS-left' onClick={() => window.location.href="/css"}>CSS</div>
        <div className='CSS-right'  onClick={() => window.location.href="/css"}><h1 style={{fontSize:"50px"}}><center>Make your web page interactive</center></h1><br/><span style={{fontSize:"20px"}}><center>The next step is to learn CSS, to set the layout of your web page with beautiful colors, fonts, and much more.</center></span></div>
      </div><br/><br/>
      <div className='JS'>
        <div className='JS-left' onClick={() => window.location.href="/javascript"}>JavaScript</div>
        <div className='JS-right'  onClick={() => window.location.href="/javascript"}><h1 style={{fontSize:"50px"}}><center>Create your first web page</center></h1><br/><span style={{fontSize:"20px"}}><center>After studying HTML and CSS, you should learn JavaScript to create dynamic and interactive web pages for your users.</center></span></div>
      </div><br/><br/>
      </div>
      <center>{isLoggedIn ? 
        (
          <Button variant="contained" onClick={()=>{window.location.href='/html'}}>Get Started🤗!!</Button>
        )
          : 
        (
            <Button variant="contained" onClick={()=>{window.location.href='/login'}}>Get Started🤗!!</Button>
        )}</center>
      </div>
      <div className='ScrollToTopButton'>
        <Button variant="contained" onClick={scrollToTop}>Scroll To Top</Button>
      </div>
    </div>
  );
};

export default Home;
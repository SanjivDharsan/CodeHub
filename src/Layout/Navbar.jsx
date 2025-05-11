import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const [isLoggedIn, setIsLoggedIn] = useState(!!loggedInUser); // Check if user is logged in

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
  };

  return (
    <div className="Navbarnavbar">
      <div className="Navbarinnerdiv">
        <Link to="/" className="NavbarnavbarLink"> <img src={logo} alt="Logo"/></Link>
      </div>
      <div style={{display:"flex", flexDirection:"row"}}>
        <Link to="/" className="NavbarnavbarLink" style={{fontSize:"x-large"}}>Home</Link>
        <DropdownMenu/>
        <Link to="/playground" className="NavbarnavbarLink" style={{fontSize:"x-large"}}>Playground</Link>
        <Link to="/aboutus" className="NavbarnavbarLink" style={{fontSize:"x-large"}}>About Us!</Link>
      </div>
      <div style={{paddingRight:"50px"}}>
        {/* Conditionally render the user's name if logged in */}
        {isLoggedIn ? 
        (
          <p style={{fontSize:"x-large", marginLeft: "20px", color:"white"}} onClick={handleLogout}>
            Welcome, {loggedInUser.name}
          </p>)
          : 
          (
          <Link to="/login" className="NavbarButton" style={{fontSize:"x-large"}}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

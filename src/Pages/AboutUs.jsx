import React from 'react';
import './AboutUs.css';
import palani from './palanii.png';
import surya from './mohana.png';
import sanjiv from './sanjiv.png';
import Navbar from '../Layout/Navbar';

const AboutUs = () => {


    return (
        <div className='pakki'>
            <Navbar />
            <div className="about-us" style={{backgroundColor:"transparent"}}>
                <center><h1 className="abthd" >
                    About Us!😊
                </h1></center>
                <center><h2 style={{color:"#cbd5e1"}}>We're a passionate trio of engineers obsessed with frontend development. Armed with React, we craft pixel-perfect experiences that integrates innovation with usability.</h2></center>
            </div>
            <div className="background"  style={{width:"100%",backgroundColor:"transparent"}}>
                <div className="rectangle1">
                    <h2>Palanisamy</h2>
                    <h5>727722EUEE073</h5>
                    <img src={palani} alt=" " className="inner-image" style={{ borderRadius: "15px", height:"300px", width:"auto" }} />
                </div>
                <div className="rectangle2">
                    <center><h2>Sanjiv Dharsan</h2></center>
                    <h5>727722EUEE093</h5>
                    <img src={sanjiv} alt=" " style={{ borderRadius: "15px", height:"310px", width:"auto" }} className="inner-image" />
                </div>
                <div className="rectangle3">
                    <center><h2>MohanaSurya</h2></center>
                    <h5>727723EUEE510</h5>
                    <img src={surya} style={{ borderRadius: "15px", width:"auto", height:"290px" }} alt=" " className="inner-image" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

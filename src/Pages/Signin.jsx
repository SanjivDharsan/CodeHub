import React from 'react'
import './Login.css';
import VideoBackground from './VideoBackground';
function Signin() {
  return (
    <div>
    {/* <Navbar/> */}
    <body className="Maggy">
    <div>
    <VideoBackground/>
    <form className="imform">
    <h1>SIGN-UP</h1>
            <div className="donkey"><label style={{fontSize:"20px"}}>
                Name:
            </label><br/>
                <input type="text" name="username"  required style={{color:"black",fontSize:"20px"}}/>
            </div>
            <div className="donkey"><label style={{fontSize:"20px"}}> 
                User Name:
            </label><br/>
                <input type="text"  name="username" style={{color:"black",fontSize:"20px"}} required/>
            </div>
  
            <div className="donkey"><label style={{fontSize:"20px"}}>
                Email:
                </label>
                <br/>
                <input type="email"  name="email" style={{color:"black",fontSize:"20px"}} required/>
            
            </div>
            <div className="donkey"><label style={{fontSize:"20px"}}>
                Date Of Birth:
            </label><br/>
                <input type="date"style={{color:"black",fontSize:"20px"}} required/>
            </div>
            <div className="donkey"><label style={{fontSize:"20px"}}>
                Phone/Mobile Number:
            </label><br/>
                <input type="tel" style={{color:"black",fontSize:"20px"}}  pattern="[0-9]{10}"  required/>
            </div>
            
            <div className="donkey" >
            <label style={{fontSize:"20px"}}>
                Password:
            </label><br/>
                <input type="password" style={{color:"black",fontSize:"20px"}} required/>
            </div>

            {/* <div className="donkey">
            {/* <Link to="/">
            <input className="submit" style={{color:"black"}} type="submit" value="Submit"/>
            </Link> 
            </div> */}

            <div className="donkey">
            <center><div  className="loginbutton">
              <button>Sign-In</button>
              <button onClick={()=> window.location.href="/login"}>Login</button>
              </div></center>
            </div>
        </form>
        </div>
        </body>
        </div>
  );
}

export default Signin
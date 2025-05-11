import React, { useState } from "react";
import VideoBackground from "./VideoBackground";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm(e.target.value, password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validateForm(email, e.target.value);
  };

  const validateForm = (email, password) => {
    const isValid = email.trim() !== "" && password.trim() !== "";
    setIsFormValid(isValid); 
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://run.mocky.io/v3/790eae9b-ff8c-4388-9ef4-4d4feb583a4d');
      const users = await response.json();
      const user = users.find(user => user.email === email);
      if (user && user.username === password) {
        console.log("Login successful");
        setOpenSnackbar(true);
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = "/"; 
      } else {
        console.log("Invalid email or password");
        setOpenErrorSnackbar(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setOpenErrorSnackbar(false);
  };

  return (
    <div>
      <body className="Maggy">
        <VideoBackground />
        <div>
          <form className="imform" onSubmit={handleLogin}>
            <h1>LOGIN</h1>

            <div className="donkey">
              <label style={{fontSize:"20px"}}>Email:</label>
              <br />
              <input
                type="email"
                name="email"
                style={{ color: "black", fontSize:"20px"}}
                required
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="donkey">
              <label style={{fontSize:"20px"}}>Password:</label>
              <br />
              <input
                type="password"
                style={{ color: "black",fontSize:"20px" }}
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="donkey"></div>
            <center>
              <div className="loginbutton">
                <button type="submit" disabled={!isFormValid}>
                  Login
                </button>
                <button onClick={() => window.location.href="/signin"}>
                  Sign-In
                </button>
              </div>
            </center>
          </form>
        </div>
      </body>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Login successful"
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
      <Snackbar
        open={openErrorSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Your login credentials don't match"
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </div>
  );
}

export default Login;

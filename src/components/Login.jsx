import React, { useState, useEffect } from 'react';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
//import Popup from './Popup.js';


function Login() {
  /*useEffect(() => {
    fetch(' ')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if("user is logging in") { 
        setLogin(true);
      } else {
        setLogin(false);
      }
    })
    .catch((error) => console.log(error));
  }, []);*/
  /* useEffect(() => {
     setLogin(true);
     console.log(loggedIn)
     if(loggedIn === true) {
       <Redirect to="/popup"/>
     } else {
       <Redirect to="/login"/>
     }
   },[])*/
  const height = 10;
  //{loggedIn && <Redirect to="/popup"/>}
  //{!loggedIn && <Redirect to="/login"/>}
  //<Input placeholder="Username" inputProps={{ 'aria-lable': 'description'}}/>
  //<Input placeholder="Password" inputProps={{ 'aria-lable': 'description'}}/>



  return (
    <div style={styles.main}>
      <p style={styles.loginHeader}>WorkTrace</p>
      <div style={styles.loginInput}>
        <Textfield
          id="username"
          label="Username"
          size="small"
          InputLabelProps={{
            style: {
              fontSize: 15
            }
          }}
          inputProps={{
            style: {
              fontSize: 15
            }
          }}
        />
      </div>
      <div style={styles.passwordInput}>
        <Textfield
          id="password"
          label="Password"
          InputLabelProps={{
            style: {
              fontSize: 15
            }
          }}
          inputProps={{
            style: {
              fontSize: 15
            }
          }}
        />
      </div>
      <div>
        <p style={styles.signUpText}>Don't have an account yet? Sign up <a href="javascript:chrome.browserAction.setPopup({popup: 'popup.html'});">here.</a></p>
      </div>
      <div style={styles.loginButton}>
        <Button variant="outlined" size="small">Login</Button>
      </div>
    </div>
  )
}

function signUp() {
  chrome.browserAction.setPopup({popup: 'popup.html'});
}

const styles = {
  main: {
    width: '250px',
    height: '250px',
  },
  loginButton: {
    position: 'absolute',
    left: '100px',
    top: '210px'
  },
  loginHeader: {
    position: 'absolute',
    left: '85px',
    top: '5px',
    fontFamily: 'Roboto',
    fontSize: '20px'
  },
  loginInput: {
    position: 'absolute',
    left: '50px',
    top: '70px',
  },
  passwordInput: {
    position: 'absolute',
    left: '50px',
    top: '120px',
  },
  signUpText: {
    position: 'absolute',
    left: '48px',
    top: '170px',
    fontSize: '8.5px',
  }
}

export default Login;
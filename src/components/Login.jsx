import React, { useState, useEffect } from 'react';
import Input from '@material-ui/core/Input';
import Textfield from '@material-ui/core/TextField';
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
        <p style={styles.login}>TESTING LOGIN</p>
        <div style={styles.loginButton}>
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
        <div style={styles.passwordButton}>
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
      </div>
  ) 
}

const styles = {
  main: {
    width: '250px',
    height: '250px',
  },
  login: {
    position: 'absolute',
    left: '85px',
    top: '20px',
  },
  loginButton: {
    position: 'absolute',
    left: '50px',
    top: '70px',
  },
  passwordButton: {
    position: 'absolute',
    left: '50px',
    top: '120px',
  }
}

export default Login; 
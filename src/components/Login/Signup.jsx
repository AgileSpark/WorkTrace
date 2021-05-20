import React, { useState, useEffect } from 'react';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Signup() {
  let myUsername = '';
  let myPassword = '';

  function signup() {
    fetch('https://worktraceserver.herokuapp.com/signup/createUser', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: myUsername, password: myPassword})
    })
      .then((res) => res.json())
      .then((data) => {
        // conditional check
        if (data.userCreated) {
          window.location.href = 'login.html';
        } else {
          alert('Username is taken');
          window.location.href = 'signup.html';
        }
      })
      .catch((error) => console.log(error));
  };

  function changePopup() {
    //port.postMessage("false");
    window.location.href = 'dashboard.html';
  }

  function handleUserChange(event) {
    myUsername = event.target.value;
    console.log(event.target.value)
  }

  function handlePassChange(event) {
    myPassword = event.target.value;
    console.log(event.target.value)
  }

  function changePopup() {
    //port.postMessage("false");
    window.location.href="login.html";
  }

  return (
    <div style={styles.main}>
      <p style={styles.signupHeader}>Sign Up</p>
      <div style={styles.accountInput}>
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
          onChange={handleUserChange}
        />
      </div>
      <div style={styles.passwordInput}>
        <Textfield
          id="password"
          label="Password"
          type="password"
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
          onChange={handlePassChange}
        />
      </div>
      <div style={styles.signupButton}>
        <Button variant="outlined" size="small" onClick={() => signup()}>Sign Up</Button>
      </div>
      <div>
        <p style={styles.backToLogin}><a href="login.html" onClick={() => changePopup()}>Back to login</a></p>
      </div>
    </div>
  )
}

const styles = {
  main: {
    width: '250px',
    height: '250px',
  },
  backToLogin: {
    position: 'absolute',
    left: '98px',
    top: '170px',
    fontSize: '8.5px',
  },
  signupHeader: {
    position: 'absolute',
    left: '95px',
    top: '5px',
    fontFamily: 'Roboto',
    fontSize: '20px'
  },
  accountInput: {
    position: 'absolute',
    left: '50px',
    top: '70px',
  },
  passwordInput: {
    position: 'absolute',
    left: '50px',
    top: '120px',
  },
  signupButton: {
    position: 'absolute',
    left: '90px',
    top: '210px'
  }
}

export default Signup;
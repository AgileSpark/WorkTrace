import React, { useState, useEffect, useContext } from 'react';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Login() {
  let myUsername = '';
  let myPassword = '';

  function login() {
    fetch('https://worktraceserver.herokuapp.com/login/verifyUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: myUsername, password: myPassword }),
    })
      .then((res) => res.json())
      .then((data) => {
        // conditional check
        if (data.usernameVerified && data.passwordVerified) { 
          window.location.href = 'popup.html';
        } else {
          alert('Incorrect username or password');
          window.location.href = 'login.html';
        }
      })
      .catch((error) => console.log(error));
  }

  function changePopup() {
    window.location.href = 'signup.html';
  }

  function handleUserChange(event) {
    myUsername = event.target.value;
  }

  function handlePassChange(event) {
    myPassword = event.target.value;
  }

  useEffect(() => {
    fetch('https://worktraceserver.herokuapp.com/login/checkSession')
      .then((res) => res.json())
      .then((data) => {
        if (data.user_id && data.username) {
          window.location.href = 'popup.html';
        } else {
          window.location.href = 'login.html';
        }
      })
      .catch((error) => console.log(error));
  }, []);

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
                fontSize: 15,
              },
            }}
            inputProps={{
              style: {
                fontSize: 15,
              },
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
                fontSize: 15,
              }
            }}
            inputProps={{
              style: {
                fontSize: 15,
              },
            }}
            onChange={handlePassChange}
          />
        </div>
        <div>
          <p style={styles.signUpText}>
            Don't have an account yet? Sign up {' '}
            <a a href="signup.html" onClick={() => changePopup()}>
              here.
          </a>
        </p>
      </div>
      <div style={styles.loginButton}>
        <Button variant="outlined" size="small" onClick={() => login()}>
          Login
        </Button>
      </div>
    </div>
  );
}

const styles = {
  main: {
    width: '250px',
    height: '250px',
  },
  loginButton: {
    position: 'absolute',
    left: '100px',
    top: '210px',
  },
  loginHeader: {
    position: 'absolute',
    left: '58px',
    top: '5px',
    fontFamily: `Orbitron, sans-serif`,
    fontSize: '20px',
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
  },
};

export default Login;

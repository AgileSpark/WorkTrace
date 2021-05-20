import { isValidObjectId } from 'mongoose';
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Popup from './Popup.js';


function App() {

  const [loggedIn, setLogin] = useState();

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
  useEffect(() => {
    setLogin(true);
  },[])
  console.log(loggedIn)
  return (
    
    <div style={styles.main}>
      <button>TEST</button>
      <BrowserRouter> 

        <Switch>
          <Route exact path="/login">
            <Login/>
            </Route>
          <Route eaxct path="/popup">
            <Popup/>
            </Route>    
        </Switch>
      </BrowserRouter>
      </div>
  )
}

const styles = {
  main: {
      width: '600px',
      height: '600px'
  }
}

export default Login; 
export default App;
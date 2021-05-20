import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Inputs() {
  const [myUserId, setUserId] = useState('');
  let myCompany;
  let mySource;
  let myLocation;
  let myUrl;

  function add() {
    console.log("STUFF I SENT: " , myUserId, myCompany, mySource, myLocation, myUrl);
    fetch('https://worktraceserver.herokuapp.com/listings/addListing', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id: myUserId, company: myCompany, source: mySource, location: myLocation, url: myUrl})
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.addedJob) {
          // need to clear input fields here
        } else if (data.jobNotAdded) {
          // notify user here that Company and Source is required
          //alert("Company and Source are required")
        }
        // conditional check
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  function handleCompanyChange(event) {
    myCompany = event.target.value;
  }

  function handleSourceChange(event) {
    mySource = event.target.value;
  }

  function handleLocationChange(event) {
    myLocation = event.target.value;
  }

  function handleUrlChange(event) {
    myUrl = event.target.value;
  }

  useEffect(() => {
    fetch('https://worktraceserver.herokuapp.com/login/checkSession')
      .then((res) => res.json())
      .then((data) => {
        setUserId(data.user_id);
      })
      .catch((error) => console.log(error));
  }, []);

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '98%',
        }}
      >
        <Input
          placeholder="Company (required)"
          inputProps={{ 'aria-label': 'description' }}
          onChange={handleCompanyChange}
        />
        <Input
          placeholder="Source (required)"
          inputProps={{ 'aria-label': 'description' }}
          onChange={handleSourceChange}
        />
        <Input
          placeholder="Location"
          inputProps={{ 'aria-label': 'description' }}
          onChange={handleLocationChange}
        />
        <Input 
          placeholder="URL" 
          inputProps={{ 'aria-label': 'description' }} 
          onChange={handleUrlChange}
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          onClick={() => add()}
        >
          Add
        </Button>
      </div>
    </form>
  );
}

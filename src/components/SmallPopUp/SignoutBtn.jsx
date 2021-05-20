import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function TextButtons() {
  function signout() {
    fetch('https://worktraceserver.herokuapp.com/login/logout')
      .then((res) => res.json())
      .then((data) => {
        // conditional check
        if (!data.userLoginStatus) {
          window.location.href = 'login.html';
        } else {
          window.location.href = 'popup.html';
        }
      })
      .catch((error) => console.log(error));
  };
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button size="small" onClick={() => signout()}>Sign Out</Button>
    </div>
  );
}

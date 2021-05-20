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

export default function ContainedButtons(props) {
  const classes = useStyles();
  
  function changePopup() {
    if (props.label === "Full Mode"){
      window.location.href = 'dashboard.html';
    }
    else {
      window.location.href = 'popup.html';
    }
  }

  return (
    <div className={classes.root}>
      <Button
        onClick={() => changePopup()}
        size="small"
        variant="contained"
        color="secondary"
        style={{ maxWidth: '100px', minWidth: '150px' }}
      >
        {props.label}
      </Button>
    </div>
  );
}

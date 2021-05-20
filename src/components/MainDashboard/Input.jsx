import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import WorkContext from '../StateContext/workContext';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Inputs() {
  //const state = useContext(WorkContext);
  
  function add() {
    console.log("USER ID", state.user_id);
  }

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
        />
        <Input
          placeholder="Source (required)"
          inputProps={{ 'aria-label': 'description' }}
        />
        <Input
          placeholder="Location"
          inputProps={{ 'aria-label': 'description' }}
        />
        <Input 
          placeholder="URL" 
          inputProps={{ 'aria-label': 'description' }} 
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

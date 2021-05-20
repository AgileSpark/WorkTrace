import React from 'react';
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
          placeholder="Website"
          inputProps={{ 'aria-label': 'description' }}
        />
        <Input
          placeholder="Location"
          inputProps={{ 'aria-label': 'description' }}
        />
        <Input
          placeholder="Company"
          inputProps={{ 'aria-label': 'description' }}
        />
        <Input placeholder="URL" inputProps={{ 'aria-label': 'description' }} />
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
        >
          Add
        </Button>
      </div>
    </form>
  );
}

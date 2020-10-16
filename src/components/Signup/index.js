import { Button, Container, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  title: {
    textAlign: 'center',
    color: '#3f51b5',
  },
}));

export const Signup = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <form className={classes.root} noValidate autoComplete="off">
        <Typography variant="h5" className={classes.title}>
          Register Form
        </Typography>
        <TextField
          fullWidth={true}
          size="small"
          id="outlined-basic"
          label="First Name"
          variant="outlined"
        />
        <TextField
          fullWidth={true}
          size="small"
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
        />
        <TextField
          fullWidth={true}
          size="small"
          id="outlined-basic"
          label="Age"
          variant="outlined"
        />
        <TextField
          fullWidth={true}
          size="small"
          id="outlined-basic"
          label="Zip Code"
          variant="outlined"
        />
        <Button fullWidth="true" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </Container>
  );
};

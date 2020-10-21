import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';

export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.heroContainer}>
        <Typography variant="h3">Connect with agents around the</Typography>
        <Typography variant="h3" color="primary">
          world
        </Typography>
      </div>
      <Button
        component={Link}
        to="/signup"
        color="primary"
        variant="contained"
        size="large">
        Start Now
      </Button>
    </div>
  );
};

import React from 'react';
import { Button, Container, Typography, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useStyles } from './styles';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();

  const signup = (data) => {
    axios({
      url: 'http://localhost:8000/users/signin',
      method: 'POST',
      data: { ...data },
    })
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('userType', data.userType);
        history.push('/match');
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container maxWidth="sm">
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(signup)}>
        <Typography variant="h5" className={classes.title}>
          Login
        </Typography>
        <TextField
          id="email"
          name="email"
          label="Email"
          fullWidth={true}
          size="small"
          variant="outlined"
          inputRef={register({ required: true })}
          error={errors.email ? true : false}
          helperText={errors.email && 'Name is required'}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          fullWidth={true}
          size="small"
          variant="outlined"
          inputRef={register({ required: true })}
          error={errors.password ? true : false}
          helperText={errors.password && 'Password is required'}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth={true}
          type="submit">
          Login
        </Button>
      </form>
    </Container>
  );
};

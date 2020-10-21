import React from 'react';
import axios from 'axios';
import { Button, Container, Typography, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useStyles } from './styles';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveAuthUserAction } from '../../redux/actions/authUserActions';

export const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const signin = (data) => {
    axios({
      url: 'http://localhost:8000/users/signin',
      method: 'POST',
      data: { ...data },
    })
      .then(({ data }) => {
        console.log(data);
        dispatch(saveAuthUserAction({ ...data, isAuth: true }));
        history.push('/match');
      })
      .catch((res) => alert(res.response.data.message));
  };

  return (
    <Container maxWidth="sm">
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(signin)}>
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

import React from 'react';
import { Button, Container, Typography, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useStyles } from './styles';

export const Signup = () => {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();

  const signup = (data) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(signup)}>
        <Typography variant="h5" className={classes.title}>
          Register Form
        </Typography>
        <TextField
          id="name"
          name="name"
          label="First Name"
          fullWidth={true}
          size="small"
          variant="outlined"
          inputRef={register({ required: true })}
          error={errors.name ? true : false}
          helperText={errors.name && 'Name is required'}
        />
        <TextField
          id="lastname"
          name="lastname"
          label="Last Name"
          fullWidth={true}
          size="small"
          variant="outlined"
          inputRef={register({ required: true })}
          error={errors.lastname ? true : false}
          helperText={errors.lastname && 'Lastname is required'}
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
        <TextField
          id="secondPassword"
          name="secondPassword"
          label="Repeat Password"
          type="password"
          fullWidth={true}
          size="small"
          variant="outlined"
          inputRef={register({
            validate: (value) => {
              return value === watch('password');
            },
          })}
          error={errors.secondPassword ? true : false}
          helperText={errors.secondPassword && 'Password dont match'}
        />
        <TextField
          id="age"
          name="age"
          label="Age"
          type="number"
          fullWidth={true}
          size="small"
          variant="outlined"
          inputRef={register({ required: true })}
          error={errors.age ? true : false}
          helperText={errors.age && 'Age is required'}
        />
        <TextField
          id="zipcode"
          name="zipcode"
          label="Zip Code"
          fullWidth={true}
          size="small"
          variant="outlined"
          inputRef={register({ required: true })}
          error={errors.zipcode ? true : false}
          helperText={errors.zipcode && 'Zip Code is required'}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth={true}
          type="submit">
          Register
        </Button>
      </form>
    </Container>
  );
};

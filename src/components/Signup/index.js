import React from 'react';
import { Button, Container, Typography, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useStyles } from './styles';

export const Signup = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

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
          error={errors.name ? true : false}
          helperText={errors.name && 'Name is required'}
          inputRef={register({ required: true })}
          fullWidth={true}
          size="small"
          label="First Name"
          id="name"
          name="name"
          variant="outlined"
        />
        <TextField
          error={errors.lastname ? true : false}
          helperText={errors.lastname && 'Lastname is required'}
          inputRef={register({ required: true })}
          fullWidth={true}
          size="small"
          label="Last Name"
          id="lastname"
          name="lastname"
          variant="outlined"
        />
        <TextField
          inputRef={register({ required: true })}
          error={errors.password ? true : false}
          helperText={errors.password && 'Password is required'}
          fullWidth={true}
          size="small"
          label="Password"
          id="password"
          name="password"
          variant="outlined"
        />
        <TextField
          inputRef={register({ required: true })}
          error={errors.age ? true : false}
          helperText={errors.age && 'Age is required'}
          fullWidth={true}
          size="small"
          label="Age"
          id="age"
          name="age"
          variant="outlined"
        />
        <TextField
          inputRef={register({ required: true })}
          error={errors.zipcode ? true : false}
          helperText={errors.zipcode && 'Zip Code is required'}
          fullWidth={true}
          size="small"
          label="Zip Code"
          id="zipcode"
          name="zipcode"
          variant="outlined"
        />
        <Button
          fullWidth={true}
          variant="contained"
          color="primary"
          type="submit">
          Register
        </Button>
      </form>
    </Container>
  );
};

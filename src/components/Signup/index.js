import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Container,
  Typography,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { useStyles } from './styles';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';

export const Signup = () => {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors, control } = useForm();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const [isAgent, setIsAgent] = useState(true);

  const signup = (data) => {
    const { userType } = data;

    axios({
      url: `http://localhost:8000/${userType}s`,
      method: 'POST',
      data: { ...data },
    })
      .then(() => {
        setOpen(true);
      })
      .catch((error) => console.log(error));
  };

  const handleClose = () => {
    setOpen(false);
    history.push('/login');
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
        <Typography variant="h7" className={classes.title}>
          Agent or Contact
        </Typography>
        <Controller
          defaultValue="agent"
          as={
            <RadioGroup row aria-label="userType">
              <FormControlLabel
                onClick={() => setIsAgent(true)}
                value="agent"
                control={<Radio color="primary" />}
                label="Agent"
              />
              <FormControlLabel
                onClick={() => setIsAgent(false)}
                value="contact"
                control={<Radio color="primary" />}
                label="Contact"
              />
            </RadioGroup>
          }
          name="userType"
          control={control}
        />
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
        {isAgent && (
          <TextField
            id="profession"
            name="profession"
            label="Profession"
            fullWidth={true}
            size="small"
            variant="outlined"
            inputRef={register({ required: true })}
            error={errors.profession ? true : false}
            helperText={errors.profession && 'Profession is required'}
          />
        )}
        <Button
          color="primary"
          variant="contained"
          fullWidth={true}
          type="submit">
          Register
        </Button>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Register Succesfull!
        </Alert>
      </Snackbar>
    </Container>
  );
};

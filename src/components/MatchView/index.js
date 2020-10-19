import React, { useState } from 'react';
import axios from 'axios';
import MapboxGLMap from '../MapBoxGLMap';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

export const MatchView = () => {
  const [devmode, setDevmode] = useState('no');
  const [devLatitude, setDevLatitude] = useState(0);
  const [devLongitude, setDevLongitude] = useState(0);

  const handleChange = (event) => {
    setDevmode(event.target.value);
  };

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let myLatitude = 0;
      let myLongitude = 0;
      if (devmode === 'yes') {
        myLatitude = devLatitude;
        myLongitude = devLongitude;
      } else {
        myLatitude = position.coords.latitude;
        myLongitude = position.coords.longitude;
      }
      const userType = localStorage.getItem('userType');
      const token = localStorage.getItem('token');
      axios({
        url: `http://localhost:8000/${userType}s/getmatch`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          userId: localStorage.getItem('userId'),
          myLatitude,
          myLongitude,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={12} sm={4}>
        <Container
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            flexDirection: 'column',
          }}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Dev Mode</FormLabel>
            <RadioGroup
              row
              aria-label="devmode"
              name="devode"
              value={devmode}
              onChange={handleChange}>
              <FormControlLabel
                value="no"
                control={<Radio color="primary" />}
                label="No"
              />
              <FormControlLabel
                value="yes"
                control={<Radio color="primary" />}
                label="Yes"
              />
            </RadioGroup>
          </FormControl>
          {devmode === 'yes' && (
            <>
              <TextField
                onChange={(e) => setDevLatitude(e.target.value)}
                id="latitude"
                label="Latitude"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setDevLongitude(e.target.value)}
                id="longitude"
                label="Longitude"
                variant="outlined"
              />
            </>
          )}
          <Button onClick={handleClick} variant="contained" color="primary">
            Get Match
          </Button>
        </Container>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Container fixed maxWidth="lg">
          <MapboxGLMap />
        </Container>
      </Grid>
    </Grid>
  );
};

import React, { useState } from 'react';
import axios from 'axios';
import MapboxGLMap from '../MapBoxGLMap';
import {
  Grid,
  Button,
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { updatePositionAction } from '../../redux/actions/authUserActions';
import { Typography } from '@material-ui/core';

export const MatchView = () => {
  const dispatch = useDispatch();
  const [devmode, setDevmode] = useState(false);
  const [devLatitude, setDevLatitude] = useState(0);
  const [devLongitude, setDevLongitude] = useState(0);
  const [range, setRange] = useState(100);
  const [matches, setMatches] = useState([]);
  const reduxState = useSelector((state) => state);

  const handleChange = (event) => {
    setDevmode(!devmode);
  };

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let myLatitude = 0;
      let myLongitude = 0;
      if (devmode) {
        myLatitude = devLatitude;
        myLongitude = devLongitude;
      } else {
        myLatitude = position.coords.latitude;
        myLongitude = position.coords.longitude;
      }
      const userType = reduxState.userType;
      const token = reduxState.token;
      axios({
        url: `${process.env.REACT_APP_BACKEND_URL}/${userType}s/getmatch`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          userId: reduxState.userId,
          range,
          myLatitude,
          myLongitude,
        },
      })
        .then((res) => {
          const lastLatitude = res.data.user.lastLatitude;
          const lastLongitude = res.data.user.lastLongitude;
          dispatch(
            updatePositionAction({
              lastLatitude: lastLatitude,
              lastLongitude: lastLongitude,
            }),
          );
          setMatches(res.data.matches);
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
                value={false}
                control={<Radio color="primary" />}
                label="No"
              />
              <FormControlLabel
                value={true}
                control={<Radio color="primary" />}
                label="Yes"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            margin="dense"
            onChange={(e) => setRange(e.target.value)}
            id="range"
            label="Range on meters"
            variant="outlined"
          />
          {devmode && (
            <>
              <TextField
                margin="dense"
                onChange={(e) => setDevLatitude(e.target.value)}
                id="latitude"
                label="Latitude"
                variant="outlined"
              />
              <TextField
                margin="dense"
                onChange={(e) => setDevLongitude(e.target.value)}
                id="longitude"
                label="Longitude"
                variant="outlined"
              />
            </>
          )}
          <Button
            size="large"
            onClick={handleClick}
            variant="contained"
            color="primary">
            Get Match
          </Button>
          {matches.map((match) => (
            <Container key={match._id}>
              <Typography variant="h5" color="primary">
                {match['name']}
              </Typography>
              <Typography variant="h6">{match['email']}</Typography>
            </Container>
          ))}
        </Container>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Container fixed maxWidth="lg">
          <MapboxGLMap matches={matches} />
        </Container>
      </Grid>
    </Grid>
  );
};

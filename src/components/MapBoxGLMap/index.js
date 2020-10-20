import React, { useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapGL, { Marker } from 'react-map-gl';
import { useSelector } from 'react-redux';
import gpsIcon from '../../assets/gps.svg';
import hereIcon from '../../assets/here.svg';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';

const MapboxGLMap = ({ matches = [] }) => {
  const classes = useStyles();
  const reduxState = useSelector((state) => state || {});
  const accessToken =
    'pk.eyJ1IjoianBhbGFjaW8wNjEyIiwiYSI6ImNrZ2Qzd2s4MDAzOHoycHBncGtkZGxoYnoifQ.PLm-APX_NXnz3KrYb2wJOw';
  const [viewport, setViewport] = useState({
    zoom: 12,
  });

  useEffect(() => {
    console.log(matches);
    const myLatitude = reduxState['lastLatitude'];
    const myLongitude = reduxState['lastLongitude'];
    setViewport({ ...viewport, latitude: myLatitude, longitude: myLongitude });
    return () => {};
  }, [reduxState]);

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={accessToken}>
      <Marker
        latitude={reduxState['lastLatitude']}
        longitude={reduxState['lastLongitude']}>
        <Typography
          className={classes.text}
          color="primary"
          variant="subtitle1"
          align="center">
          Here
        </Typography>
        <img className={classes.gps_icon} src={hereIcon} alt="here" />
      </Marker>
      {matches.map((match) => (
        <Marker
          key={match['_id']}
          latitude={match.lastLatitude}
          longitude={match.lastLongitude}>
          <Typography
            className={classes.text}
            color="secondary"
            variant="subtitle1"
            align="center">
            {match['name']}
          </Typography>
          <img className={classes.gps_icon} src={gpsIcon} alt="gps" />
        </Marker>
      ))}
    </MapGL>
  );
};

export default MapboxGLMap;

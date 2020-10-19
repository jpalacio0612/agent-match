import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MapboxGLMap from '../MapBoxGLMap';

export const MatchView = () => {
  const handleClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const myLatitude = position.coords.latitude;
      const myLongitude = position.coords.longitude;
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
    <div>
      <button onClick={handleClick}>Get Match</button>
      <MapboxGLMap />
    </div>
  );
};

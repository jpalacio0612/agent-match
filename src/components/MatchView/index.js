import React, { useEffect } from 'react';

export const MatchView = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
    });
  }, []);

  return <div></div>;
};

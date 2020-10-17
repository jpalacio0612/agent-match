import React, { useEffect } from 'react';

export const MatchView = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const myLatitude = position.coords.latitude.toFixed(5);
      const mylongitude = position.coords.longitude.toFixed(5);
    });
  }, []);

  return <div></div>;
};

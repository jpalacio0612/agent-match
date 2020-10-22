# Welcome to Agent Match

Project made in MongoDb, Express, React and Node, Redux, MaterialUI, Mapbox.

This application consists of connecting agents with possible contacts based on their geolocation.

## Launch locally

### Frontend

```shell

$ git clone https://github.com/jpalacio0612/agent-match.git

$ cd agent-match

$ npm install

$ npm run start

```

The frontend is based on React by default it runs at http://localhost:3000/

### Backend

```shell

$ git clone https://github.com/jpalacio0612/agent-match-backend.git

$ cd agent-match-backend

$ npm install

$ npm run start

```

The backend is made in node, express and mongoose by default it runs inhttp://localhost:8000/

### Database

The database is stored in mongoatlasDB so no additional configuration is required.

## Operation of the application

1. Registry.

The user can be registered both as an agent or as a contact, the form is based on react-hook-form and has validations such as required fields, patterns, minimum of letters in the password. Once the user registers, his information is stored in the backend, his password is encrypted thanks to bcrypt and he is assigned a token with JWT.

2. Login

The user logs in with his email and password. the backend returns a token and additional information that is stored in redux, redux also synchronizes with the local storage so that the session persists even after reloading the page. Once this is done, you will be redirected to the Match page.

3. Match

The user can choose two modes:

- no DevMode: In this mode the user can only choose the range in meters around where he will search for possible contacts. When the user presses get match, he must grant permission to the browser to obtain his geoposition and based on this position the backend will return the contacts found in that range.

- DevMode: In this mode the user, in addition to choosing the range in meters around, can choose the coordinates (latitude, longitude) of his position, pretending to be in another place. I recommend using the following SAN FRANCISCO coordinates: latitude: 37.762649 longitude: -122.457759 because most contacts are registered close to these coordinates.

4.  Match algorithm

The algorithm is based on using the MapBox library to obtain the distance between the user's position and the positions of the different contacts registered in the application. A cycle is performed to iterate over the arrangement of the contact positions and return the indices of those that meet the condition of being in the range of meters around, to then filter the original arrangement with these indices and return the result to the frontend to be rendered on the map.

import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { MatchView } from './components/MatchView';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/match" component={MatchView} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Header from '../Header';
import Index from '../Index';
import Contacts from '../Contacts';
import About from '../About';
import Counter from '../Counter';
import Request from '../Request';

const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route
          exact
          path="/contacts"
          component={Contacts}
        />
        <Route
          exact
          path="/about"
          component={About}
        />
        <Route
          exact
          path="/counter"
          component={Counter}
        />
        <Route
          exact
          path="/request"
          component={Request}
        />
        <Route
          exact
          path="/"
          component={Index}
        />
        <Redirect
          to="/"
        />
      </Switch>
    </Router>
  );
};

export default App;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Header = () => {
  return (
    <div className="app-routes">
      <NavLink
        exact
        className="app-route-btn"
        activeClassName="selected"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="app-route-btn"
        activeClassName="selected"
        to="/contacts"
      >
        Contacts
      </NavLink>
      <NavLink
        className="app-route-btn"
        activeClassName="selected"
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className="app-route-btn"
        activeClassName="selected"
        to="/counter"
      >
        Counter
      </NavLink>
      <NavLink
        className="app-route-btn"
        activeClassName="selected"
        to="/request"
      >
        Request
      </NavLink>
    </div>
  );
};

export default Header;

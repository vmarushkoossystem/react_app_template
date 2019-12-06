import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => {
  return (
    <div className="app-routes">
      <Link className="app-route-btn" to="/">Home</Link>
      <Link className="app-route-btn" to="/contacts">Contacts</Link>
      <Link className="app-route-btn" to="/about">About</Link>
      <Link className="app-route-btn" to="/counter">Counter</Link>
      <Link className="app-route-btn" to="/request">Request</Link>
    </div>
  );
};

export default Header;

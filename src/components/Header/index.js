import React from 'react';
import './Header.scss';

const Header = props => {
  return (
    <div className="app-routes">
      <a className="app-route-btn" href="/">Home</a>
      <a className="app-route-btn" href="/contacts">Contacts</a>
      <a className="app-route-btn" href="/about">About</a>
      <a className="app-route-btn" href="/counter">Counter</a>
      <a className="app-route-btn" href="/request">Request</a>
    </div>
  );
};

export default Header;

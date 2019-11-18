import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../Menu/Menu';
import logo from '../../img/Logo.svg';
import './Header.scss';

const Header = () => (
  <header className="header-container">
    <div className="header-brand">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <h1>
        <Link to="/">Julie Norcross</Link>
      </h1>
    </div>
    <Menu className="Menu" />
  </header>
);

export default Header;

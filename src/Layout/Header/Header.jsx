import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../Menu/Menu';
import logo from '../../img/logo.svg';
import './Header.scss';

const Header = () => (
  <header className="header-container">
    {/* <div className="header-brand"> */}
    <Link className="header-brand" to="/">
      <img className="logo" src={logo} alt="" />
      <h1>Julie Norcross</h1>
    </Link>
    {/* </div> */}
    <Menu className="Menu" />
  </header>
);

export default Header;

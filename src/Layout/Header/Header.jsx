import React, { Component } from 'react';
import './Header.scss';
import Menu from '../Menu/Menu';
import logo from '../../img/Logo_primary_thicc.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <div className="header-brand">
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
          <h1>
            <Link to="/">Julie Norcross</Link>
          </h1>
          {/* <h2>Designer // Coder // Maker</h2> */}
        </div>
        <Menu />
      </header>
    );
  }
}

export default Header;

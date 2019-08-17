import React, { Component } from 'react';
import './Header.scss';
import Menu from '../Menu/Menu';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-brand">
          <h1>Julie Norcross - 10/01</h1>
        </div>
        <Menu />
      </div>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import './Header.scss';
import Menu from '../Menu/Menu';
import logo from '../../img/Logo_primary_thicc.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen }, () => {
      if (this.state.isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'scroll';
      }
    });
  }

  render() {
    const menuClass = 'Menu ' + this.state.isOpen ? 'menu-open' : '';
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
        <Menu
          className={menuClass}
          isOpen={this.state.isOpen}
          handleToggle={this.toggleMenu}
        />
      </header>
    );
  }
}

export default Header;

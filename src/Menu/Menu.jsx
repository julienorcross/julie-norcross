import React, { Component } from 'react';
import './Menu.scss';
import plus from '../img/plus.svg';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const menuOpen = `menu-overlay ${
      this.state.isOpen ? ' menuOpen' : 'menuClosed'
    }`;
    return (
      <div className="menu-wrapper">
        <div className={menuOpen} />
        <div className="menu-links">
          <div className="menu-hamburger">
            <button onClick={() => this.toggleMenu()}>
              <img src={plus} alt="" />
            </button>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="https://github.com/julienorcross">Github</a>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;

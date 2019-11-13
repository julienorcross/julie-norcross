import React, { Component } from 'react';
import './Header.scss';
import Menu from '../Menu/Menu';
import logo from '../../img/Logo_primary_thicc.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();

    this.state = { isOpen: false, width: window.innerWidth };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  toggleMenu() {
    if (this.state.width >= 768) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: !this.state.isOpen });
    }

    //   , () => {
    //   if (this.state.isOpen) {
    //     document.body.style.overflow = 'hidden';
    //   } else {
    //     document.body.style.overflow = 'scroll';
    //   }
    // });
  }

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
        </div>
        <Menu
          className="Menu"
          isOpen={this.state.isOpen}
          handleToggle={this.toggleMenu}
        />
      </header>
    );
  }
}

export default Header;

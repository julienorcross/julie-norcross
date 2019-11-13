import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  static defaultProps = {
    pages: [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Contact', path: '/contact' },
      { title: 'Github', path: 'https://github.com/julienorcross' }
    ]
  };

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
    const menuOpen = `menu-overlay ${
      this.state.isOpen ? ' menuOpen' : 'menuClosed'
    }`;
    return (
      <div className="menu-wrapper">
        <div className={menuOpen} />
        <div className="menu-links">
          <div className="menu-hamburger">
            <svg
              width="25px"
              height="25px"
              className="plus-svg"
              onClick={() => this.toggleMenu()}>
              <path
                className="plus-path"
                d="M14.47,0v10.48H25v4H14.47v10.48H10.5V14.48H0v-4h10.5V0H14.47z"
              />
            </svg>
          </div>
          <ul>
            {this.props.pages.map(page => {
              const curr = `nav-link ${
                this.props.location.pathname === page.path ? 'curr' : ''
              }`;
              if (page.title !== 'Github') {
                return (
                  <li key={page.path}>
                    <Link
                      to={page.path}
                      className={curr}
                      onClick={() => {
                        this.setState({ isOpen: false });
                        document.body.style.overflow = 'scroll';
                      }}>
                      {page.title}
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={page.path}>
                    <a
                      href={page.path}
                      target="_blank"
                      className={curr}
                      rel="noopener noreferrer">
                      Github
                    </a>
                  </li>
                );
              }
            })}
            {/* <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li> */}
            {/* <li>
              <a className="github" href="https://github.com/julienorcross">
                Github
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);

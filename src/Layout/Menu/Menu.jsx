import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';

import './Menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
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

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  handleClick() {
    this.setState({ isOpen: false });
    enableBodyScroll();
  }

  handleChange = () => {
    if (this.state.isOpen) {
      enableBodyScroll();
      this.setState({ isOpen: false });
    } else {
      disableBodyScroll();
      this.setState({ isOpen: true });
    }
  };

  render() {
    return (
      <div className="menu-wrapper">
        <input
          type="checkbox"
          className="toggler"
          checked={this.state.isOpen}
          onChange={this.handleChange}
        />
        <div className="menu-hamburger">
          <div></div>
        </div>
        <div className="menu-overlay"></div>
        <div className="menu-links">
          <div>
            <div>
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
                          onClick={this.handleClick}>
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
                          Github <i className="fas fa-external-link-alt"></i>
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);

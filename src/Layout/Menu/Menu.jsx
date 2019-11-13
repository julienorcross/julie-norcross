import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Menu.scss';

class Menu extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { isOpen: false };
  // }

  static defaultProps = {
    pages: [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Contact', path: '/contact' },
      { title: 'Github', path: 'https://github.com/julienorcross' }
    ]
  };

  render() {
    const menuOpen = `menu-overlay ${
      this.props.isOpen ? ' menuOpen' : 'menuClosed'
    }`;
    return (
      <div className="menu-wrapper">
        <input type="checkbox" className="toggler" />
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
                        <Link to={page.path} className={curr}>
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
                          <i className="fas fa-external-link-alt"></i> Github
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

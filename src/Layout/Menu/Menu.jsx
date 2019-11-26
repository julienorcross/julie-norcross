import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';

import './Menu.scss';

const Menu = ({ location }) => {
  useEffect(() => () => clearAllBodyScrollLocks(), []);

  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Github', path: 'https://github.com/julienorcross' }
  ];

  const handleClick = () => {
    setIsOpen(false);
    enableBodyScroll();
  };

  const handleChange = () => {
    if (isOpen) {
      enableBodyScroll();
      setIsOpen(false);
    } else {
      disableBodyScroll();
      setIsOpen(true);
    }
  };

  return (
    <div className="menu-wrapper">
      <input
        type="checkbox"
        className="toggler"
        checked={isOpen}
        onChange={handleChange}
      />
      <div className="menu-hamburger">
        <div></div>
      </div>
      <div className="menu-overlay"></div>
      <div className="menu-links">
        <div>
          <div>
            <ul>
              {pages.map(page => {
                const curr = `nav-link ${
                  location.pathname === page.path ? 'curr' : ''
                }`;
                if (page.title !== 'Github') {
                  return (
                    <li key={page.path}>
                      <Link
                        to={page.path}
                        className={curr}
                        onClick={handleClick}>
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
};

export default withRouter(Menu);

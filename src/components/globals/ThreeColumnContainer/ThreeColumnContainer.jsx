import React from 'react';

const ThreeColumnContainer = ({ navStyle }) => {
  return (
    <nav className={navStyle}>
      <ul>
        <li>
          <a className="navbar-text" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="navbar-text" href="/about">
            About
          </a>
        </li>
        <li>
          <a className="navbar-text" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ThreeColumnContainer;

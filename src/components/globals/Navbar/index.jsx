import React from 'react';
import './Navbar.css';

const Navbar = ({navStyle}) => {
  return (
    <nav className={navStyle}>
        <ul>
          <li><a className="navbar-text" href="index.html">Home</a></li>
          <li><a className="navbar-text" href="about.html">About</a></li>
          <li><a className="navbar-text" href="contact.html">Contact</a></li>
          <li><a className="navbar-text" href="projects.html">Projects</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;

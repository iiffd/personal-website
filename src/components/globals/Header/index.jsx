import React from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          Samuel
          <br />
          Hong
        </h1>
        <h3 className="tagline">My Portfolio Website</h3>
        <Navbar navStyle="nav" />
      </div>
      <Hero />
    </header>
  );
};

export default Header;

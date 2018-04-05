import React from 'react';
import logo from './logo.svg';
import './Hero.css';

const Hero = () => {
  return (
    <div className="Hero">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="App-title">Powered by React</p>
    </div>
  )
}

export default Hero;

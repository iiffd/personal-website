import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './globals/Header';
import Footer from './globals/Footer';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;

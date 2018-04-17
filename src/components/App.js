import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './globals/Header';
import Footer from './globals/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <header className="App-header">
          <h1 className="App-title">Powered by React</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import Header from './globals/Header';
import Footer from './globals/Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

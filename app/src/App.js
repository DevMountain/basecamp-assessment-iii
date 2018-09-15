import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import About from './components/about';
import Contact from './components/contact';
class App extends Component {
  render() {
    return (
      <div id="main">
        <a name="main"></a>
        <Header />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;

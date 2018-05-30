import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import Header from './components/header.js';
import Footer from './components/footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;

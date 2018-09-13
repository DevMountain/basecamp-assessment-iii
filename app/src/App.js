import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    var header = new Header();
    return (
      <div className="App">
        {header.render()}
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App">
        <h1>this is interesting...</h1>
      </header>
    );
  }
}

export default App;

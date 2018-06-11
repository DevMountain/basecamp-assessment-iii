import React, { Component } from 'react';
import car from './car.jpeg';
import './App.css';

class App extends Component {
  render() {
   function why(e){
     e.preventDefault();
     alert("WHY DID YOU PUSH IT!!");

   }


    return (
      <div className="App">
        <header className="App-header">
          <img src={car} className="App-car" alt="car" />
          <h1 className="App-title">PLEASE NOT HIT THE BUTTON</h1>
        </header>
        
        <button className="App-button" onClick={why}>
        DO NOT PUSH ME!

        </button>
      </div>
    );
  }
}

export default App;

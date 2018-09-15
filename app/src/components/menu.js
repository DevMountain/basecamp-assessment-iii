import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
        <ul id="header">
          <li><a href="#main">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
    );
  }
}


export default Menu;
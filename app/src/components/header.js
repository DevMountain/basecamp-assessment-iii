import React, { Component } from 'react';
import Menu from './menu';
class Header extends Component {
  render() {
    return (
        <div className="title">
            <img src="" />
            <h1>Travis Stratton</h1>
            <Menu />
        </div>
    );
  }
}

export default Header;
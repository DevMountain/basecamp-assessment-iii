import React, { Component } from 'react';
import './Contact.css';
export default class Contact extends Component {
  render() {
    return (
        <div className="contact">
        <a name="contact"></a>
            <div id="info">
                <div>Travis Stratton</div>
                <div>Phone: 520-955-0860</div>
                <div>Email : t.strat7@gmail.com</div>
                <div>Github: <a href="https://github.com/tstrat">My Github!</a></div>
            </div>
        </div>
    );
  }
}
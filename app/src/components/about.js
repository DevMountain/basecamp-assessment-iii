import React, { Component } from 'react';
import image from './images/travis-pic.jpg';
import './About.css';
export default class About extends Component {
  render() {
    return (
        <div className="about">
            <a name="about"></a>
            <h1>Welcome to my first real react page!</h1>
            <img alt="Travis' Birthday" src={image}></img>
            <p>I started my path into programming when I enrolled and subsequently graduated from the University of Arizona.  I studied with a focus in Java and application development, and was able to quickly jump into a career with a company in Phoenix known as Skytouch.  They host a property management system for Choice Hotels.  After just over a year there, I took some time off to travel and do the things I wanted to before college.  Unfortunatly this meant theere was a gap in my resume.</p>
            <p>This lead to a crazy rollercoaster of trying to get interviews for different companies.  With such a large gap, I was being overlooked by everyone.  No one wanted to hire a person who was out of work for so long.  The gap kept increasing.  I thought I was never going to get out of this rut.</p>
            <p>It was then that I decided to sign up for DevMountain with the goal of learning a new skill and showing that I really am serious about computer science.  Here is hoping I learn a lot and grow into a fantastic developer!</p>
            <p id="signature">~Travis Stratton</p>
        </div>
    );
  }
}
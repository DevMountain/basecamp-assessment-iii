import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const comp1Phrase = "Dolorem Ipsum";
const comp1Element = <h3>{comp1Phrase}</h3>;
const comp2Array = ["First", "Second", "Third"];
const comp2Element = 
  <ul>
    <li><a href='#' onClick={changeImage(1)}>{comp2Array[0]}</a></li>
    <li><a href='#' onClick={changeImage(2)}>{comp2Array[1]}</a></li>
    <li><a href="#" onClick={changeImage(3)}>{comp2Array[2]}</a></li>
  </ul>;
const comp3Pic1 = "./img01.jpg";
const comp3Pic2 = "./img02.png";
const comp3Pic3 = "./img03.gif";
var splash = comp3Pic1; //default to comp3Pic1
var comp3Element = <img src={splash}/>;

ReactDOM.render
(
  comp1Element,
  document.getElementById('one')
);
ReactDOM.render
(
  comp2Element,
  document.getElementById('two')
);
ReactDOM.render
(
  comp3Element,
  document.getElementById('three')
);

function changeImage(pic)
{
  //I tried to be all fancy and make the picture change with the hyperlinks
  //I couldn't get it to work. Decided to move on to more important things
  if(pic === 1)
  {
    splash = comp3Pic1;
  }
  else if(pic === 2)
  {
    splash = comp3Pic2;
  }
  else if(pic === 3)
  {
    splash = comp3Pic3;
  }
  comp3Element = <img src={splash}/>;
  document.getElementById('three').render;
}
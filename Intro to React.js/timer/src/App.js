import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function currTime() {
  return (<h1>{new Date().toLocaleTimeString()}</h1>);
}

function currDate() {
  let date = new Date();
  return (<p>Day:{date.getDate()} Month:{date.getMonth()} Year:{date.getFullYear()}</p>);
}

function currLocation() {
  return (<p>Varna, Bulgaria</p>);
}

function tick() {
  const element = (
    <div className='App-header'>
      {currTime()}
      {currDate()}
      {currLocation()}
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
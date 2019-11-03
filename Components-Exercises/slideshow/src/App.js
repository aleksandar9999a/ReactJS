import React, { Component } from 'react';
import Slider from './components/Slider/Slider';
import Characters from './components/Characters';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Characters />
      </div>
    )
  }
}

export default App;

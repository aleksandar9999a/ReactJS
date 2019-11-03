import React, {Component} from 'react';
import Slider from './components/Slider/Slider'
import './App.css';

class App extends Component{
  render(){
    return (
      <div className='container'>
        <h1>React Components</h1>
        <Slider />
      </div>
    )
  }
}

export default App;

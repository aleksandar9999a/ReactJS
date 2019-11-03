import React, {Component} from 'react';
import Buttons from './Components/Buttons';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className='App-header'>
        <Buttons text='Some text'/>
      </div>
    )
  }
}

export default App;

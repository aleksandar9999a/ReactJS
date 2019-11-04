import React, { Component } from 'react';
import LogUp from './components/LogUp/LogUp';
import SignUp from './components/SignUpForm/SignUpForm';
import PokemonForm from './components/PokemonForm/PokemonForm'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLog: false }
  }

  generateLoginForm() {
    if (this.state.isLog) {
      return <PokemonForm />
    } else {
      return (
        <div className='row'>
          <LogUp loginData=''/>
          <SignUp />
        </div>
      )
    }
  }


  render() {
    return (
      <div className="App">
        {this.generateLoginForm()}
      </div>
    );
  }
}

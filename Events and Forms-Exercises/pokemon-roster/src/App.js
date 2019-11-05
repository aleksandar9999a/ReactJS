import React, { Component } from 'react';
import LogUp from './components/LogUp/LogUp';
import SignUp from './components/SignUpForm/SignUpForm';
import PokemonForm from './components/PokemonForm/PokemonForm'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} }
    this.generateLoginForm = this.generateLoginForm.bind(this);
    this.receiveLoginData = this.receiveLoginData.bind(this);
  }

  receiveLoginData(data) {
    this.setState({ data });
    localStorage.setItem('userData', JSON.stringify(data));
  }

  generateLoginForm() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    
    if (userData !== null) {
      if (userData.success) {
        return <PokemonForm />
      }

      return (
        <div>
          <div className='row'>
            <LogUp loginData={this.receiveLoginData} />
            <SignUp />
          </div>
          <div>{this.state.data.message}</div>
        </div>
      )
    } else {
      return (
        <div>
          <div className='row'>
            <LogUp loginData={this.receiveLoginData} />
            <SignUp />
          </div>
          <div>{this.state.data.message}</div>
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

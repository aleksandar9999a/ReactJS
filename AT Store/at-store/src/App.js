import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import MyRouters from './components/myRouters/MyRouters';

export default class App extends Component {
  userIsHere = () => {
    const user = sessionStorage.getItem('authtoken');

    if (user) {
      return 'logOutBtn'
    }

    return 'loginBtn';
  }

  render = () => {
    return (
      <div className="App">
        <Navigation type={this.userIsHere()}/>
        <MyRouters />
        <Footer />
      </div>
    );
  }
}

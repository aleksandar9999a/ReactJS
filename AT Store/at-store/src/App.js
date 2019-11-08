import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import MyRouters from './components/myRouters/MyRouters';

export default class App extends Component {
  handleLoggedUser = () => {
    let authtoken = sessionStorage.getItem('authtoken');
    
    if (authtoken) {
      return true;
    }

    return false;
  }

  render = () => {
    return (
      <div className="App">
        <Navigation isLogged={this.handleLoggedUser}/>
        <MyRouters />
        <Footer />
      </div>
    );
  }
}

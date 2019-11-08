import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import MyRouters from './components/myRouters/MyRouters';

export default class App extends Component {
  render = () => {
    return (
      <div className="App">
        <Navigation />
        <MyRouters />
        <Footer />
      </div>
    );
  }
}

import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default App;

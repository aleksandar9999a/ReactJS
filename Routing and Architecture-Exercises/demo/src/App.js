import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/common/Home';

import './App.css';
import './style/site.css';
import Notification from './components/common/Notification';

function App() {
  return (
    <div id="App">
      <Header />
      <Notification />
      <Route path='/' exact component={Home} />
    </div>
  );
}

export default App;

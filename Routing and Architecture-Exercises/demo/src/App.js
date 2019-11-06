import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/common/Home';

import './App.css';
import './style/site.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path='/' exact component={Home} />
    </div>
  );
}

export default App;

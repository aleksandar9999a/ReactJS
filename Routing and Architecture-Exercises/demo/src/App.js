import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/common/Home';
import Notification from './components/common/Notification';
import Catalog from './components/catalog/Catalog';
import './App.css';
import './style/site.css';

function App() {
  return (
    <div id="App">
      <Header />
      <Notification />
      <Route path='/' exact component={Home} />
      <Route path='/catalog' exact component={Catalog} />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Welcome from './Components/Welcome'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome title="Ivan" subtitle='I am here!'/>
      </header>
    </div>
  );
}

export default App;

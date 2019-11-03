import React from 'react';
import './App.css';

let counter = 0;

const events = {
  handleEvent: function (e) {
    if (e.target.tagName === 'BUTTON') {
      counter++;
      e.target.innerHTML = counter;
    }
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>{counter}</button>
      </header>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', events)
})

export default App;

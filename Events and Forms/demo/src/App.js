import React from 'react';
import ButtonWithClick from './components/ButtonWithClick';
import RegisterForm from './components/RegisterForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <RegisterForm />
      <ButtonWithClick name='Alex'/>
    </div>
  );
}

export default App;

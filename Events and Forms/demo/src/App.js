import React from 'react';
import ButtonWithClick from './components/ButtonWithClick';
import RegisterForm from './components/RegisterForm';
import Container from './components/Container';
import './App.css';

function App() {
  return (
    <div className="App">
      <RegisterForm />
      <ButtonWithClick name='Alex'/>
      <Container />
    </div>
  );
}

export default App;

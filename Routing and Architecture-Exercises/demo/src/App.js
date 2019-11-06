import React from 'react';
import './App.css';
import LoginForm from './components/user/LoginForm';
import Header from './components/common/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <LoginForm />
    </div>
  );
}

export default App;

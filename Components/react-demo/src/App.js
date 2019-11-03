import React from 'react';
import './App.css';
import Names from './Components/Names'
import ProfilePicture from './Components/ProfilePicture'
import Contacts from './Components/Contacts'
import insta from './Components/insta.png'
import gitHub from './Components/github.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='card row'>
          <ProfilePicture />
          <div>
            <Names firstName="Alexandar" lastName='Todorov' />
            <div className='row'>
              <Contacts imgSrc={gitHub} user='aleksandar9999a' />
              <Contacts imgSrc={insta} user='sandi9999a' />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

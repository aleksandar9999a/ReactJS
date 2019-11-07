import React from 'react';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import MyRouters from './components/myRouters/MyRouters';

function App() {
  return (
    <div className="App">
      <Navigation />
      <MyRouters />
      <Footer />
    </div>
  );
}

export default App;

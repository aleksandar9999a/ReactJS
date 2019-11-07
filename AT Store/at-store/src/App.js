import React from 'react';
import Navigation from './components/navigation/Navigation';
import Container from './components/container/Container';
import Footer from './components/footer/Footer';
import Routers from './components/routers/Routers';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container />
      <Footer />
      <Routers />
    </div>
  );
}

export default App;

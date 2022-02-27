import React from 'react';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <div>
      <section className="hero">
        <div className="title"> Edison Simondet</div>
      </section>
      <Nav></Nav>
      <main>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;

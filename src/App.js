import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <section className="hero">
        <div className="title"> Edison Simondet</div>
      </section>
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

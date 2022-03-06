import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="cultured">
      <section className="hero cultured">
        <div className="title"> Edison Simondet</div>
      </section>
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;

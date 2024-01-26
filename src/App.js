import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;

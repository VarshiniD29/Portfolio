import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;

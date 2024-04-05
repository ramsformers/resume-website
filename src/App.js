import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Photo from './components/picture';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Photo />
        <section id="about" className="py-5">
          <About />
        </section>
        <hr className="my-5" /> {/* Horizontal line as separator */}
        <section id="experience" className="py-5">
          <Experience />
        </section>
        <hr className="my-5" /> {/* Horizontal line as separator */}
        <section id="education" className="py-5">
          <Education />
        </section>
        <hr className="my-5" /> {/* Horizontal line as separator */}
        <section id="skills" className="py-5">
          <Skills />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Topbar from './components/Topbar/Topbar';
import Intro from './components/Intro/Intro';
import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import Work from './components/Work/Work';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import { useState } from 'react';
import Menu from './components/Menu/Menu';
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className='app'>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className='sections'>
          <Intro />
          <Portfolio />
          <Work />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;

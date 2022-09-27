import React from 'react'
import Analytics from './components/Analytics.jsx';
import Cards from './components/Cards.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.js';
import Newsletter from './components/Newsletter.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;

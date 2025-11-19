import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ConceptGenerator from './components/ConceptGenerator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <ConceptGenerator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
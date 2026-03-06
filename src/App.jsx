import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen">
      <Hero />
      <Features />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;

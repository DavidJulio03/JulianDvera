import React from 'react';
import Navbar from '../../shared/components/Navbar';
import Footer from '../../shared/components/Footer';
import Hero from './components/Hero';
import CTA from './components/CTA';
import PortfolioGrid from './components/PortfolioGrid';
import Services from './components/Services';


const Home = () => {
  return (
    <div className="min-h-screen relative selection:bg-brand-orange selection:text-brand-white">

      {/* --- COMPONENTS --- */}
      <Navbar />
      <Hero />
      <Services />
      <PortfolioGrid />
      <CTA />
      <Footer />
      
    </div>
  );
};

export default Home;
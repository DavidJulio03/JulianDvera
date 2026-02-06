import React from 'react';
import Navbar from '../../shared/components/Navbar';
import Footer from '../../shared/components/Footer';
import Hero from './components/Hero';
import CTA from './components/CTA';
import PortfolioGrid from './components/PortfolioGrid';
import Services from './components/Services';


const Home = () => {
  return (
    <div className="bg-[var(--color-brand-dark)] min-h-screen w-full">

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
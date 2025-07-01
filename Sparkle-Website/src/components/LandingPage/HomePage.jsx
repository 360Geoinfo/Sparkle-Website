import React from 'react';
import { Navbar } from '../../components/Navigation/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Team from './Team/Team';
import Book from './Book/Book';
import Testimonials from './Testimonials/Testimonials';
import Training from './Training/Training';
import Pricing from './Pricing/Pricing';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Book />
      <Testimonials />
      <Training />
      <Pricing />
      <Footer />
    </div>
  );
}

export default HomePage;

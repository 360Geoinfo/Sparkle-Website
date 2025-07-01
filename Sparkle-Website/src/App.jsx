import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navigation/Navbar';

import Hero from './components/LandingPage/Hero/Hero';
import About from './components/LandingPage/About/About';
import Team from './components/LandingPage/Team/Team';
import Service from './components/LandingPage/Services/Service';
import Book from './components/LandingPage/Book/Book';
import Testimonials from './components/LandingPage/Testimonials/Testimonials';
import Training from './components/LandingPage/Training/Training';

import ClinicalPsychology from './components/Services/Clinical Psychology/ClinicalPsychology';

import Blog from './components/Resource/Blog/Blog';
import FQA from './components/Resource/FQA/FQA';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Team />
            <Service />
            <Book />
            <Testimonials />
            <Training />
          </>
        } />
        <Route path="/ClinicalPsychology" element={<ClinicalPsychology />} />
        
        <Route path="/Resources/Blog" element={<Blog />} />
        <Route path="/Resources/FQA" element={<FQA />} />
      </Routes>
    </div>
  );
}

export default App;

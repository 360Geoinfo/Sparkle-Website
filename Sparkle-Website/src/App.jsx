import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';

import Hero from './components/LandingPage/Hero/Hero';
import About from './components/LandingPage/About/About';
import Team from './components/LandingPage/Team/Team';
import Service from './components/LandingPage/Services/Service';
import Book from './components/LandingPage/Book/Book';
import Testimonials from './components/LandingPage/Testimonials/Testimonials';
import Training from './components/LandingPage/Training/Training';
import Pricing from './components/LandingPage/Pricing/Pricing';

import ClinicalPsychology from './components/Services/Clinical Psychology/ClinicalPsychology';
import Events from './components/Services/Events/Events';
import StudentAttachment from './components/Services/StudentAttachments/StudentAttachments';
import ClinicalSupervision from './components/Services/Clinical Supervision/ClinicalSupervision';

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
            <Pricing />
            <Footer />
          </>
        } />

        
        <Route path="/Services/ClinicalPsychology" element={<ClinicalPsychology />} />
        <Route path="/Services/Events" element={<Events/>} />
        <Route path="/Services/StudentAttachments" element={<StudentAttachment />} />
        <Route path="/Services/ClinicalSupervision" element={<ClinicalSupervision />} />
        
        <Route path="/Resources/Blog" element={<Blog />} />
        <Route path="/Resources/FQA" element={<FQA />} />
      </Routes>

    </div>
  );
}

export default App;

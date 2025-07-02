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

import ClinicalSupervision from './components/Services/Clinical Supervision/ClinicalSupervision';
import ClinicalPsychology from './components/Services/ClinicalPsychology/ClinicalPsychology';
import Events from './components/Services/Events/Events';
import SpeechTherapy from './components/Services/Speech Therapy/SpeechTherapy';
import StudentAttachment from './components/Services/StudentAttachments/StudentAttachments';

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

        <Route path="/Services/ClinicalSupervision" element={<ClinicalSupervision />} />
        <Route path="/Services/ClinicalPsychology" element={<ClinicalPsychology />} />
        <Route path="/Services/Events" element={<Events/>} />
        {/* Product */}
        <Route path="/Services/SpeechTherapy" element={<SpeechTherapy />} />
        <Route path="/Services/StudentAttachments" element={<StudentAttachment />} />
        
        <Route path="/Resources/Blog" element={<Blog />} />
        <Route path="/Resources/FQA" element={<FQA />} />
      </Routes>
    </div>
  );
}

export default App;

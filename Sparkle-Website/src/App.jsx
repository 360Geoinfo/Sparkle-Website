import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navigation/Navbar';
import Footer from './components/Footer/Footer';

import Hero from './components/Home/Hero/Hero';
import About from './components/Home/About/About';
import Team from './components/Home/Team/Team';
import Service from './components/Home/Services/Service';
import Book from './components/Home/Book/Book';
import Testimonials from './components/Home/Testimonials/Testimonials';
import Training from './components/Home/Training/Training';
import Pricing from './components/Home/Pricing/Pricing';

import SpeechTherapy from './components/Services/Speech Therapy/SpeechTherapy';
import ClinicalPsychology from './components/Services/Clinical Psychology/ClinicalPsychology';
import Products from './components/Services/Products/Products';
import Events from './components/Services/Events/Events';
import StudentAttachment from './components/Services/Student Attachments/StudentAttachments';
import ClinicalSupervision from './components/Services/Clinical Supervision/ClinicalSupervision';

import Blog from './components/Resource/Blog/Blog';
import FAQ from './components/Resource/FAQ/FAQ';

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

        <Route path="/Services/ClinicalSupervision" element={<ClinicalSupervision />} />
        <Route path="/Services/ClinicalPsychology" element={<ClinicalPsychology />} />
        <Route path="/Services/Events" element={<Events/>} />
        <Route path="/Services/Products" element={<Products/>} />
        <Route path="/Services/SpeechTherapy" element={<SpeechTherapy />} />
        <Route path="/Services/StudentAttachments" element={<StudentAttachment />} />
        
        <Route path="/Resources/Blog" element={<Blog />} />
        <Route path="/Resources/FAQ" element={<FAQ />} />
      </Routes>

    </div>
  );
}

export default App;

import styles from './App.module.css'
import Hero from './components/LandingPage/Hero/Hero';
import { Navbar } from './components/Navigation/Navbar';
import About from './components/LandingPage/About/About';
import Team from './components/LandingPage/Team/Team';
import Service from './components/LandingPage/Services/Service';
import Book from './components/LandingPage/Book/Book';
import Testimonials from './components/LandingPage/Testimonials/Testimonials';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Service />
      <Book />
      <Testimonials />
    </div>
  )
}

export default App;
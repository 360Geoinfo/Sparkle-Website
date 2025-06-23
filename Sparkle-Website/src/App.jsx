import styles from './App.module.css'
import Hero from './components/LandingPage/Hero/Hero';
import { Navbar } from './components/Navigation/Navbar';
import About from './components/LandingPage/About/About';
// import Team from './components/LandingPage/Team/Team';


function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      {/* <Team /> */}
    </div>
  )
}

export default App;
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/LandingPage/HomePage';
import ServicesPage from './components/ServicesPage/ServicesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
}

export default App;




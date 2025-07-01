import { Routes, Route } from 'react-router-dom';
import HomePage from './components/LandingPage/HomePage';
import Events from './components/ServicesPage/Events/Events'; 
import Student from './components/ServicesPage/Student Attachments/StudentAttachments';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/events" element={<Events />} /> 
      <Route path="/services/student-attachments" element={<Student />} />
    </Routes>
  );
}

export default App;

import { Routes, Route } from 'react-router';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import Courses from './pages/Courses';
import LearningPaths from './pages/LearningPaths';
import PathDetail from './pages/PathDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/learning-paths" element={<LearningPaths />} />
        <Route path="/learning-paths/:pathId" element={<PathDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Analytics />
    </>
  );
}

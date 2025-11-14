import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SimulationPage from './components/SimulationPage';
import SolutionPage from './components/SolutionPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/simulation/:type" element={<SimulationPage />} />
        <Route path="/solution/:type" element={<SolutionPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
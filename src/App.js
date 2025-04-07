
import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/portfolioPage';
import ResumePage from './pages/resumePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/resume" element={<ResumePage />} exact />
        <Route path="/portfolioPage" element={<PortfolioPage />} exact />
      </Routes>
    </Router>
  );
};

export default App;
 
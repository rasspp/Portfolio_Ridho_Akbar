import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ReactGA from 'react-ga';
import Profil from './pages/Profil';
import Navbar from './components/Navbar';
import Freelance from './pages/Freelance';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ParticlesBg from './components/thirdParty/ParticlesBg';

function initializeReactGA() {
  ReactGA.initialize('G-WRM85F9TBL');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  useEffect(() => {
    initializeReactGA();
  }, []);

  return (
    <Router>
      <div className="flex overflow-hidden justify-center pt-5 w-screen h-screen bg-gray-600 md:pt-12">
        <div className="absolute">
          <ParticlesBg />
        </div>
        <div className="relative md:max-h-[90%] w-11/12 md:w-[70%] lg:max-w-[70%]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Profil />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/freelance" element={<Freelance />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

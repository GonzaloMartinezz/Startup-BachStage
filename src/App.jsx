import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Tutorial from './pages/Tutorial';
import Solutions from './pages/Solutions';
import Showcase from './pages/Showcase';
import Security from './pages/Security';
import Docs from './pages/Docs';
import SuccessStories from './pages/SuccessStories';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-[#e2e2e2] font-body selection:bg-bach-green selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" replace />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/security" element={<Security />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/stories" element={<SuccessStories />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

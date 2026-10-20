import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Faculty from './pages/Faculty/Faculty';
import Events from './pages/Events/Events';
import DepartmentQuiz from './pages/DepartmentQuiz/DepartmentQuiz';
import LaundryRequest from './pages/LaundryRequest/LaundryRequest';
import Faq from './pages/Faq/Faq';
import Contact from './pages/Contact/Contact';
import './App.scss';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-shell">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/despre-noi" element={<AboutUs />} />
            <Route path="/despre-facultate" element={<Faculty />} />
            <Route path="/evenimente" element={<Events />} />
            <Route path="/afla-departamentul" element={<DepartmentQuiz />} />
            <Route path="/cerere-spalatorie" element={<LaundryRequest />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

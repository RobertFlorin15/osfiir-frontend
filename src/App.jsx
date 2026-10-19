import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import FacultyPage from './pages/FacultyPage';
import EventsPage from './pages/EventsPage';
import DepartmentQuizPage from './pages/DepartmentQuizPage';
import LaundryRequestPage from './pages/LaundryRequestPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import './App.css';

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
            <Route path="/" element={<HomePage />} />
            <Route path="/despre-noi" element={<AboutUsPage />} />
            <Route path="/despre-facultate" element={<FacultyPage />} />
            <Route path="/evenimente" element={<EventsPage />} />
            <Route path="/afla-departamentul" element={<DepartmentQuizPage />} />
            <Route path="/cerere-spalatorie" element={<LaundryRequestPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

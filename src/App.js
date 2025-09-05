import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.js';
import HomePage from './pages/HomePage.js';
import ServicesPage from './pages/ServicesPage.js';
import TechnologiesPage from './pages/TechnologiesPage.js';
import AboutPage from './pages/AboutPage.js';
import CompanyPage from './pages/CompanyPage.js';
import ContactPage from './pages/ContactPage.js';
import Footer from './components/Footer.js';
import WebDevelopmentPage from './pages/services/WebDevelopmentPage.js';
import MobileAppDevelopmentPage from './pages/services/MobileAppDevelopmentPage.js';
import DigitalMarketingPage from './pages/services/DigitalMarketingPage.js';
import CloudSolutionsPage from './pages/services/CloudSolutionsPage.js';
import FrontEndPage from './pages/technologies/FrontEndPage.js';
import BackEndPage from './pages/technologies/BackEndPage.js';
import CmsPage from './pages/technologies/CmsPage.js';
import MobilePage from './pages/technologies/MobilePage.js';
import DatabasePage from './pages/technologies/DatabasePage.js';
import InfrastructurePage from './pages/technologies/InfrastructurePage.js';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.js';
import TermsOfServicePage from './pages/TermsOfServicePage.js';

import './App.css';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.substring(1);
      try {
        const element = document.getElementById(id);
        if (element) {
          // Adjust for fixed header height
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } catch (e) {
        console.error("Could not find element with id:", id);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopmentPage />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/services/cloud-solutions-and-devops" element={<CloudSolutionsPage />} />
            <Route path="/technologies" element={<TechnologiesPage />} />
            <Route path="/technologies/front-end" element={<FrontEndPage />} />
            <Route path="/technologies/back-end" element={<BackEndPage />} />
            <Route path="/technologies/cms" element={<CmsPage />} />
            <Route path="/technologies/mobile" element={<MobilePage />} />
            <Route path="/technologies/database" element={<DatabasePage />} />
            <Route path="/technologies/infra-devops" element={<InfrastructurePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
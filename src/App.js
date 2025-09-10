import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './App.css';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage.js'));
const ServicesPage = lazy(() => import('./pages/ServicesPage.js'));
const TechnologiesPage = lazy(() => import('./pages/TechnologiesPage.js'));
const AboutPage = lazy(() => import('./pages/AboutPage.js'));
const CompanyPage = lazy(() => import('./pages/CompanyPage.js'));
const ContactPage = lazy(() => import('./pages/ContactPage.js'));
const WebDevelopmentPage = lazy(() => import('./pages/services/WebDevelopmentPage.js'));
const MobileAppDevelopmentPage = lazy(() => import('./pages/services/MobileAppDevelopmentPage.js'));
const DigitalMarketingPage = lazy(() => import('./pages/services/DigitalMarketingPage.js'));
const CloudSolutionsPage = lazy(() => import('./pages/services/CloudSolutionsPage.js'));
const FrontEndPage = lazy(() => import('./pages/technologies/FrontEndPage.js'));
const BackEndPage = lazy(() => import('./pages/technologies/BackEndPage.js'));
const CmsPage = lazy(() => import('./pages/technologies/CmsPage.js'));
const MobilePage = lazy(() => import('./pages/technologies/MobilePage.js'));
const DatabasePage = lazy(() => import('./pages/technologies/DatabasePage.js'));
const InfrastructurePage = lazy(() => import('./pages/technologies/InfrastructurePage.js'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage.js'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage.js'));

const LoadingFallback = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 160px)', fontSize: '1.2rem', color: '#475569' }}>
        Loading page...
    </div>
);

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.substring(1);
      try {
        const element = document.getElementById(id);
        if (element) {
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
          <Suspense fallback={<LoadingFallback />}>
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
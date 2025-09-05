import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const ArrowRightIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const TwitterIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
    </svg>
);
  
const LinkedInIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.389 0-1.601 1.086-1.601 2.206v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.368 7.161a1.796 1.796 0 01-1.8-1.796A1.796 1.796 0 015.368 3.57a1.796 1.796 0 011.8 1.795 1.796 1.796 0 01-1.8 1.796zm1.536 9.177H3.832v-8.59h3.072v8.59z" clipRule="evenodd"></path>
    </svg>
);
  
const FacebookIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
    </svg>
);
  
const InstagramIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.412.06 3.808s-.012 2.74-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.412.06-3.808.06s-2.74-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.412-.06-3.808s.012-2.74.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.341 3.65c.636-.247 1.363-.416 2.427-.465C9.784 2.013 10.13 2 12.315 2zM12 7.042c-2.733 0-4.952 2.22-4.952 4.958s2.22 4.958 4.952 4.958 4.958-2.22 4.958-4.958-2.226-4.958-4.958-4.958zM12 15a3 3 0 110-6 3 3 0 010 6z" clipRule="evenodd" />
    </svg>
);


const Footer = () => {
  return (
    <footer className="footer-new">
      <div className="container footer-new-container">
        <div className="footer-new-top">
          <div className="footer-newsletter">
            <h2>Sign up for our newsletter</h2>
            <p>Monthly hand-picked discoveries and stories of thriving in a new world of design. GIFs (often) included.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email-newsletter">Email Address</label>
              <div className="input-group">
                <input id="email-newsletter" type="email" placeholder="yourname@example.com" />
                <button type="submit" aria-label="Subscribe to newsletter"><ArrowRightIcon /></button>
              </div>
            </form>
          </div>
          <div className="footer-socials">
            <h3>Follow Us</h3>
            <div className="social-icons-list">
              <a href="#twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="#facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-links-grid">
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-list">
              <li><Link to="/services/web-development">Web Development</Link></li>
              <li><Link to="/services/mobile-app-development">Mobile App</Link></li>
              <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/services/cloud-solutions-and-devops">Cloud Solutions</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Technologies</h3>
            <ul className="footer-list">
              <li><Link to="/technologies/front-end">Front-End</Link></li>
              <li><Link to="/technologies/back-end">Back-End</Link></li>
              <li><Link to="/technologies/mobile">Mobile</Link></li>
              <li><Link to="/technologies/database">Database</Link></li>
              <li><Link to="/technologies/cms">CMS</Link></li>
              <li><Link to="/technologies/infra-devops">Infra & DevOps</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul className="footer-list">
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Community</h3>
            <ul className="footer-list">
              <li><a href="#blog">Blog</a></li>
              <li><a href="#help">Help Center</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul className="footer-list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/company">Company</Link></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#legal">Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-new-bottom">
            <p>&copy; {new Date().getFullYear()} Onclick Infotech LLP. All rights reserved.</p>
            <div className="footer-legal-links">
                <Link to="/terms-of-service">Terms of Service</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
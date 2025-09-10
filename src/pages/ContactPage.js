import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './ContactPage.css';
import SEO from '../components/SEO';

// Assuming asset paths, adjust if necessary
import emailIcon from '../assets/home/footer logo/ATR.png';
import callIcon from '../assets/home/footer logo/call.png';
import linkedinIcon from '../assets/home/footer logo/LinkedIn.png';
import twitterIcon from '../assets/home/footer logo/twitter.png';
import facebookIcon from '../assets/home/footer logo/facebook.png';
import instagramIcon from '../assets/home/footer logo/instagram.png';

const useAnimateOnScroll = () => {
    const ref = useRef(null);

    useEffect(() => {
        const elements = ref.current?.querySelectorAll('.animate-on-scroll');
        if (!elements || elements.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return ref;
};


// --- SVG Icon Components ---
const SalesIcon = () => (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="20" width="48" height="30" rx="4" fill="#D1E9FF"/>
        <path d="M8 28H56" stroke="#4A90E2" strokeWidth="2"/>
        <rect x="12" y="38" width="12" height="6" rx="2" fill="#4A90E2"/>
        <circle cx="50" cy="14" r="8" fill="#4A90E2"/>
        <text x="50" y="17" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">$</text>
    </svg>
);
const SupportIcon = () => (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12C8 9.79086 9.79086 8 12 8H52C54.2091 8 56 9.79086 56 12V38C56 40.2091 54.2091 42 52 42H18L8 52V12Z" fill="#D8F3DC"/>
        <path d="M24 24H26" stroke="#34A853" strokeWidth="3" strokeLinecap="round"/>
        <path d="M32 24H40" stroke="#34A853" strokeWidth="3" strokeLinecap="round"/>
        <path d="M26 21C26 22.1046 25.1046 23 24 23C22.8954 23 22 22.1046 22 21C22 19.8954 22.8954 19 24 19C25.1046 19 26 19.8954 26 21Z" stroke="#34A853" strokeWidth="2"/>
    </svg>
);
const PressIcon = () => (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="14" width="44" height="32" rx="4" fill="#FFD1DC"/>
        <rect x="10" y="22" width="44" height="8" fill="#F472B6"/>
        <rect x="42" y="28" width="8" height="2" rx="1" fill="white"/>
        <rect x="42" y="32" width="8" height="2" rx="1" fill="white"/>
        <circle cx="24" cy="30" r="6" fill="white"/>
        <path d="M24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26Z" fill="#F472B6"/>
        <path d="M20 35C20 32.7909 21.7909 31 24 31C26.2091 31 28 32.7909 28 35H20Z" fill="#F472B6"/>
    </svg>
);
const PartnersIcon = () => (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="24" fill="#00BFFF" stroke="#00AEEF" strokeWidth="4"/>
        <path d="M24 28H40V38H24V28Z" fill="white"/>
        <path d="M30 28V24C30 22.8954 30.8954 22 32 22C33.1046 22 34 22.8954 34 24V28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M48 32C48 27.5817 44.4183 24 40 24" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M16 32C16 36.4183 19.5817 40 24 40" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
);

const ArrowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 5L20 12L13 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 5L11 12L4 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
  
const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const contactCardsData = [
    {
        icon: <SalesIcon />,
        title: "Project Inquiry",
        description: "Ready to start a new project or have a brilliant idea? Let's talk about how we can bring it to life with our expert solutions.",
        linkText: "Start a Project",
        href: "#contact-form-section"
    },
    {
        icon: <SupportIcon />,
        title: "Client Support",
        description: "Are you an existing client needing technical assistance? Our dedicated support team is here to help you.",
        linkText: "Get Support",
        href: "#contact-form-section"
    },
    {
        icon: <PressIcon />,
        title: "Press & Media",
        description: "For all media inquiries, press releases, or to feature our work, please get in touch with our communications team.",
        linkText: "Media Inquiries",
        href: "#contact-form-section"
    },
    {
        icon: <PartnersIcon />,
        title: "Partnerships",
        description: "Interested in forming a strategic partnership or collaborating with us? We'd love to explore the possibilities.",
        linkText: "Become a Partner",
        href: "#contact-form-section"
    }
];


const ContactPage = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [isVerified, setIsVerified] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(0);

    const [formStatus, setFormStatus] = useState({ status: 'idle', message: ''});
    const sectionRef = useAnimateOnScroll();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const sliderRef = useRef(null);
    const thumbRef = useRef(null);


    useEffect(() => {
        const stateData = location.state;
        if (stateData) {
            const updates = {};
            if (stateData.email) updates.email = stateData.email;
            if (stateData.name) updates.name = stateData.name;
            if (stateData.phone) updates.phone = stateData.phone;
            if (stateData.service) updates.service = stateData.service;
            if (stateData.message) updates.message = stateData.message;

            setFormData(prev => ({ ...prev, ...updates }));
        }
    }, [location.state]);

    // Click outside handler for custom dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const serviceOptions = [
        "Web Development",
        "Mobile App Development",
        "Cloud Solutions",
        "Search Engine Optimization(SEO)",
        "UI/UX devlopment",
        "AI - ML App Devlopment",
        "Quality Assurance",
        "Mobile Game Development"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleServiceSelect = (service) => {
        setFormData(prev => ({ ...prev, service }));
        setIsDropdownOpen(false);
    };

    const handleDragStart = (e) => {
        if (isVerified) return;
        setIsDragging(true);
    };

    const handleDragMove = (e) => {
        if (!isDragging || isVerified) return;
        
        const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        const slider = sliderRef.current;
        const thumb = thumbRef.current;
        if (!slider || !thumb) return;

        const sliderRect = slider.getBoundingClientRect();
        const thumbWidth = thumb.getBoundingClientRect().width;

        const newLeft = clientX - sliderRect.left - thumbWidth / 2;
        const maxLeft = sliderRect.width - thumbWidth;

        const boundedLeft = Math.max(0, Math.min(newLeft, maxLeft));
        setSliderPosition(boundedLeft);

        if (boundedLeft > maxLeft - 5) { // 5px threshold
            setIsVerified(true);
            setIsDragging(false);
            setSliderPosition(maxLeft);
        }
    };
    
    const handleDragEnd = () => {
        if (isVerified) return;
        setIsDragging(false);
        setSliderPosition(0);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleDragMove);
            window.addEventListener('touchmove', handleDragMove);
            window.addEventListener('mouseup', handleDragEnd);
            window.addEventListener('touchend', handleDragEnd);
        }
        return () => {
            window.removeEventListener('mousemove', handleDragMove);
            window.removeEventListener('touchmove', handleDragMove);
            window.removeEventListener('mouseup', handleDragEnd);
            window.removeEventListener('touchend', handleDragEnd);
        };
    }, [isDragging, isVerified]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, service, message } = formData;
        if (!name || !email || !phone || !service || !message) {
            setFormStatus({ status: 'error', message: 'Please fill in all required fields.' });
            return;
        }
        if (!isVerified) {
            setFormStatus({ status: 'error', message: 'Please complete the verification slider.' });
            return;
        }

        setFormStatus({ status: 'sending', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'Something went wrong.');
            setFormStatus({ status: 'success', message: result.message });
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            setIsVerified(false);
            setSliderPosition(0);
        } catch (error) {
            setFormStatus({ status: 'error', message: error.message });
        }
    };

    return (
        <>
            <SEO 
              title="Contact Us | Get a Quote"
              description="Ready to start a project? Get in touch with Onclick Infotech for a free consultation on our web, mobile, and cloud services. Let's build something great together."
            />
            <section className="contact" ref={sectionRef} id="contact-form-section">
                <div className="contact-container">
                    <div className="contact-left">
                        <div className="contact-info">
                            <h1 className="animate-on-scroll">Let's get in touch</h1>
                            <p className="animate-on-scroll delay-1">Ready to start a project?</p>

                            <div className="address animate-on-scroll delay-2">
                                <h3>Headquarter</h3>
                                <p>Surat, India</p>
                                <h3>Branch</h3>
                                <p>Surat, India | Ahmedabad, India</p>
                            </div>

                            <div className="emails animate-on-scroll delay-3">
                                <p><img src={emailIcon} alt="Email"/> sales@onclick.ai</p>
                                <p><img src={emailIcon} alt="Email"/> contact@onclickinfotech.com</p>
                            </div>

                            <div className="phones animate-on-scroll delay-4">
                                <h4>Administration</h4>
                                <p><img src={callIcon} alt="Phone"/> +91 95635 75423</p>
                                <h4>HR Department</h4>
                                <p><img src={callIcon} alt="Phone"/> +91 91045 00673</p>
                            </div>

                            <div className="social-links animate-on-scroll delay-5">
                                <h4>Connect with us:</h4>
                                <div className="social-icons">
                                    <a href="#linkedin"><img src={linkedinIcon} alt="LinkedIn"/></a>
                                    <a href="#twitter"><img src={twitterIcon} alt="Twitter"/></a>
                                    <a href="#facebook"><img src={facebookIcon} alt="Facebook"/></a>
                                    <a href="#instagram"><img src={instagramIcon} alt="Instagram"/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-right">
                        <form onSubmit={handleSubmit} className="contact-form animate-on-scroll">
                            <h2>Contact us</h2>
                            <div className="form-group">
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder=" " />
                                <label htmlFor="name">Name</label>
                                <span className="underline"></span>
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder=" " />
                                <label htmlFor="email">Email</label>
                                <span className="underline"></span>
                            </div>
                            <div className="form-group">
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder=" " />
                                <label htmlFor="phone">Phone</label>
                                <span className="underline"></span>
                            </div>
                            
                            <div
                                className={`form-group custom-select-container ${formData.service ? 'filled' : ''} ${isDropdownOpen ? 'open' : ''}`}
                                ref={dropdownRef}
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                tabIndex="0"
                                role="combobox"
                                aria-haspopup="listbox"
                                aria-expanded={isDropdownOpen}
                                onKeyDown={(e) => e.key === 'Enter' && setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <div className="selected-value">{formData.service || ''}</div>
                                <label>Select a Service</label>
                                <span className="underline"></span>
                                <span className="dropdown-icon" aria-hidden="true"></span>
                                {isDropdownOpen && (
                                    <ul className="options-list" role="listbox">
                                        {serviceOptions.map(option => (
                                            <li
                                                key={option}
                                                onClick={() => handleServiceSelect(option)}
                                                role="option"
                                                aria-selected={formData.service === option}
                                                tabIndex="0"
                                                onKeyDown={(e) => e.key === 'Enter' && handleServiceSelect(option)}
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className="form-group">
                                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required placeholder=" "></textarea>
                                <label htmlFor="message">Message</label>
                                <span className="underline"></span>
                            </div>
                            <div className="form-footer">
                                <div 
                                    className={`verification-slider ${isVerified ? 'verified' : ''} ${isDragging ? 'dragging' : ''}`}
                                    ref={sliderRef}
                                >
                                    <div className="slider-progress" style={{ width: `${sliderPosition + 44}px` }}></div>
                                    <div 
                                        className="slider-thumb" 
                                        ref={thumbRef}
                                        style={{ left: `${sliderPosition}px` }}
                                        onMouseDown={handleDragStart}
                                        onTouchStart={handleDragStart}
                                    >
                                        {isVerified ? <CheckIcon/> : <ArrowIcon />}
                                    </div>
                                    <span className="slider-text">Slide to Verify</span>
                                    <span className="verified-text">Verified!</span>
                                </div>
                                <button type="submit" className="btn-primary" disabled={formStatus.status === 'sending'}>
                                    {formStatus.status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                             {formStatus.message && (
                                <div className={`form-feedback ${formStatus.status}`}>
                                    {formStatus.message}
                                </div>
                            )}
                            <div className="privacy">
                                <p>By submitting this form, you agree to our <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms-of-service">Terms of Service</a></p>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
            
            <section className="get-in-touch-section">
                <div className="container">
                    <div className="get-in-touch-header">
                        <h2>Get in Touch</h2>
                        <p>We want to hear from you. Let us know how we can help.</p>
                    </div>
                    <div className="contact-cards-grid">
                        {contactCardsData.map((card, index) => (
                            <div className="contact-card" key={index}>
                                <div className="card-corner-accent"></div>
                                <div className="card-icon">{card.icon}</div>
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-description">{card.description}</p>
                                <a href={card.href} className="card-link">{card.linkText}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
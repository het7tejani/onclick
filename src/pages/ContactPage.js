import React, { useState, useEffect, useRef } from 'react';
import './ContactPage.css';

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
        const elements = ref.current.querySelectorAll('.animate-on-scroll');
        if (elements.length === 0) return;

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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isVerified, setIsVerified] = useState(false);
    const [showCaptcha, setShowCaptcha] = useState(false);
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0 });
    const [captchaInput, setCaptchaInput] = useState('');
    const [formStatus, setFormStatus] = useState('idle'); // idle, sending, sent
    const sectionRef = useAnimateOnScroll();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCaptchaCheckbox = () => {
        if (!isVerified) {
            const num1 = Math.floor(Math.random() * 10 + 1);
            const num2 = Math.floor(Math.random() * 10 + 1);
            setCaptcha({ num1, num2, answer: num1 + num2 });
            setShowCaptcha(true);
        }
    };
    
    const checkCaptchaAnswer = () => {
        if (parseInt(captchaInput) === captcha.answer) {
            setIsVerified(true);
            alert('Verified successfully! ✅');
            setShowCaptcha(false);
        } else {
            alert('Incorrect answer! Please try again. ❌');
            setIsVerified(false);
        }
        setCaptchaInput('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, service, message } = formData;
        if (!name || !email || !phone || !service || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        if (!isVerified) {
            alert('Please verify that you are not a robot.');
            return;
        }

        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('sent');
            console.log('Form Submitted:', formData);
            setTimeout(() => {
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                setIsVerified(false);
                setFormStatus('idle');
            }, 2000);
        }, 1500);
    };

    return (
        <>
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
                            <div className="form-group">
                                <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                                    <option value="" disabled></option>
                                    <option value="web">Web Development</option>
                                    <option value="mobile">Mobile App Development</option>
                                    <option value="cloud">Cloud Solutions</option>
                                    <option value="SEO">Search Engine Optimization(SEO)</option>
                                    <option value="UI/UX">UI/UX devlopment</option>
                                    <option value="AI - ML">AI - ML App Devlopment</option>
                                    <option value="(QA)">Quality Assurance</option>
                                    <option value="Game Development">Mobile Game Development</option>
                                </select>
                                <label htmlFor="service">Select a Service</label>
                                <span className="underline"></span>
                            </div>
                            <div className="form-group">
                                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required placeholder=" "></textarea>
                                <label htmlFor="message">Message</label>
                                <span className="underline"></span>
                            </div>
                            <div className="form-footer">
                                <div className="captcha_container">
                                    <input type="checkbox" id="not-robot" checked={isVerified} onChange={handleCaptchaCheckbox} />
                                    <label htmlFor="not-robot" onClick={handleCaptchaCheckbox}>I'm not a robot</label>
                                </div>
                                <button type="submit" className="btn-primary" disabled={formStatus === 'sending' || formStatus === 'sent'}>
                                    {formStatus === 'idle' && 'Send Message'}
                                    {formStatus === 'sending' && 'Sending...'}
                                    {formStatus === 'sent' && 'Sent!'}
                                </button>
                            </div>
                            <div className="privacy">
                                <p>By submitting this form, you agree to our <a href="#privacy">Privacy Policy</a> and <a href="#terms">Terms of Service</a></p>
                            </div>
                        </form>
                    </div>
                </div>

                {showCaptcha && (
                    <div className={`popup-overlay ${showCaptcha ? 'show' : ''}`}>
                        <div className="popup-content">
                            <div id="captcha-question" style={{ margin: '10px 0' }}>
                                What is {captcha.num1} + {captcha.num2}?
                            </div>
                            <input
                                type="text"
                                id="captcha-answer"
                                placeholder="Type answer here"
                                value={captchaInput}
                                onChange={(e) => setCaptchaInput(e.target.value)}
                                style={{ padding: '10px 0', margin: '10px' }}
                            />
                            <br />
                            <button type="button" className="captcha_btn" onClick={checkCaptchaAnswer}>Verify</button>
                            <button type="button" className="captcha_btn" onClick={() => setShowCaptcha(false)}>Cancel</button>
                        </div>
                    </div>
                )}
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
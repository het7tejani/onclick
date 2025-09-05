import React from 'react';
import './CompanyPage.css';
import Hero from '../components/home/Hero.js';

// Note: Please ensure you add the required assets to the 'src/assets/company/' directory for them to display correctly.
import heroDashboardImage from '../assets/home/success story.png';
import jayTejani from '../assets/company/jay tejani.jpg';
import arshKukadiya from '../assets/company/arsh kukadiya.jpg';
import facebookIcon from '../assets/company/facebook.png';
import instagramIcon from '../assets/company/instagram.png';
import linkedinIcon from '../assets/company/linkedin.png';
import twitterIcon from '../assets/company/twitter.png';
import guidanceIcon from '../assets/company/gauidance.png';
import assistanceIcon from '../assets/company/247.png';
import alternativesIcon from '../assets/company/Desirable Alternatives.png';
import analysisIcon from '../assets/company/pie.png';
import aboutImg from '../assets/company/about onclick infotech.png';
import workstationsImg from '../assets/company/Work Stations and Spaces.png';
import TitleIcon from '../assets/company/title3.png'


const CompanyPage = () => {
    // Removed the animation logic (useRef and useEffect)

    return (
        <div className="company-page">
            <Hero 
                title="Company Growth Strategy"
                description="At Onclick Infotech, our growth strategy is built on innovation, client success, and continuous learning. We invest in cutting-edge technologies, nurture top talent, and form strategic partnerships to deliver scalable, future-ready solutions. By staying agile and expanding globally, we drive sustainable growth while helping our clients thrive in an ever-evolving digital world."
                image={heroDashboardImage}
                imageAlt="Onclick Infotech Company Growth"
                imageOnLeft={false}
            />

            <section 
              className="image-title-section" 
              style={{ '--bg-image': `url(${TitleIcon})` }}
            >
                <h1 className="image-title">
                    Onclick Infotech LLP
                </h1>
            </section>

            <div className="team-section">
                <div className="team-member">
                    <div className="image-container">
                        <img src={jayTejani} alt="Jay Tejani" />
                        <div className="overlay">
                            <div className="info">
                                <h3>Jay Tejani</h3>
                                <p>Director</p>
                                <div className="introduction-social-icons">
                                    <a href="https://www.facebook.com/jay.tejani.75" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="facebook" /></a>
                                    <a href="https://www.instagram.com/jay_tejani_/profilecard/?igsh=MTM2b2lub3FtbGFwaA==" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="instagram" /></a>
                                    <a href="https://www.linkedin.com/in/jay-tejani-529743217/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="linkedin" /></a>
                                    <a href="https://x.com/jay_tejani" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="twitter" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-member">
                    <div className="image-container">
                        <img src={arshKukadiya} alt="Arsh Kukadiya" />
                        <div className="overlay">
                            <div className="info">
                                <h3>Arsh Kukadiya</h3>
                                <p>Director</p>
                                <div className="introduction-social-icons">
                                    <a href="#facebook" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="facebook" /></a>
                                    <a href="#instagram" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="instagram" /></a>
                                    <a href="#linkedin" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="linkedin" /></a>
                                    <a href="#twitter" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="twitter" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="details-container">
                <div className="details-section">
                    <div className="img-title-content">
                        <img src={guidanceIcon} alt="Guidance" />
                        <div className="inner-content">
                            <h2 className="company-section-title">Substantial Guidance</h2>
                            <p className="company-section-content">we provide expert guidance at every step, ensuring your projects are strategically planned and flawlessly executed for maximum success.</p>
                        </div>
                    </div>
                </div>
                <div className="details-section">
                  <div className="img-title-content">
                    <img src={assistanceIcon} alt="Assistance" />
                    <div className="inner-content">
                      <h2 className="company-section-title">24/7 Perpetual Assistance</h2>
                      <p className="company-section-content">Our dedicated support team is available around the clock, offering reliable and immediate assistance to keep your business running without interruptions.</p>
                    </div>
                  </div>
                </div>
                <div className="details-section">
                  <div className="img-title-content">
                    <img src={alternativesIcon} alt="Alternatives" />
                    <div className="inner-content">
                      <h2 className="company-section-title">Desirable Alternatives</h2>
                      <p className="company-section-content">We present smart, flexible solutions tailored to your unique needs, giving you the freedom to choose the best path for your business growth.</p>
                    </div>
                  </div>
                </div>
                <div className="details-section">
                  <div className="img-title-content">
                    <img src={analysisIcon} alt="Analysis" />
                    <div className="inner-content">
                      <h2 className="company-section-title">Opinion Research and Analysis</h2>
                      <p className="company-section-content">To know volumes and preference patterns of potential market, we do analyze numbers and assess the qualitative insides of current market size.</p>
                    </div>
                  </div>
                </div>
            </div>

            <div className="About-Onclick-Infotech-Work-Stations-and-Spaces">
                <div className="company-about-section-padding about-section">
                    <div className="about-company-container">
                        <div className="company-about-text-box">
                            <h2>About Onclick Infotech</h2>
                            <p>We are the Competent Professionals from diverse backgrounds, later became a strong team with long term technically viable force. Our elemental intent is to contribute to the global business services at different capacities, such as Android/iOS Application development, Marketing and Nurturing of applications.</p>
                            <p>We believe in superior services which always results in building of reputation among our clients and subscribers.</p>
                            <p>Onclick Infotech is extremely specific when it comes to practicing global standards and ethical practices. We always keep in mind our motto and mission while achieving our goals. We have been constantly working on the processes and techniques which benefit the clients. We never compromise quality over anything. Experiences and Challenges have taught us to bring down costs and maintain state of art services. One can also notice our commitment through our existing products and services.</p>
                        </div>
                        <div className="company-about-image-box">
                            <img src={aboutImg} alt="About Onclick Infotech" />
                        </div>
                    </div>
                </div>
                <div className="company-about-section-padding workstations-section">
                    <div className="about-company-container">
                        <div className="company-about-image-box">
                            <img src={workstationsImg} alt="Workstations" />
                        </div>
                        <div className="company-about-text-box">
                            <h2>Work Stations and Spaces</h2>
                            <p>At Onclick Infotech, our workstations are thoughtfully designed to inspire innovation, collaboration, and productivity. We offer a modern, fully equipped workspace featuring the latest technology, ergonomic setups, and a vibrant atmosphere that fosters creativity.</p>
                            <p>Our spaces are structured to encourage open communication while ensuring privacy for focused tasks. Whether collaborating on complex projects or brainstorming breakthrough ideas, our teams enjoy an environment that energizes and empowers them every day.</p>
                            <p>We believe that great ideas thrive in the right setting — that's why we prioritize comfort, efficiency, and a culture of seamless teamwork across all our workstations and spaces.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CompanyPage;
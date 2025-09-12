import React from "react";
import "./CompanyPage.css";
import Hero from "../components/home/Hero.js";
import SEO from "../components/SEO.js";
import StructuredData from "../components/StructuredData.js";


// Note: Please ensure you add the required assets to the 'src/assets/company/' directory for them to display correctly.
import heroDashboardImage from "../assets/home/success story.png";
import jayTejani from "../assets/company/jay tejani.jpg";
import arshKukadiya from "../assets/company/arsh kukadiya.jpg";
import guidanceIcon from "../assets/company/gauidance.png";
import assistanceIcon from "../assets/company/247.png";
import alternativesIcon from "../assets/company/Desirable Alternatives.png";
import analysisIcon from "../assets/company/pie.png";
import aboutImg from "../assets/company/about onclick infotech.png";
import workstationsImg from "../assets/company/Work Stations and Spaces.png";
import TitleIcon from "../assets/company/title3.png";

// --- SVG ICONS ---
const FacebookIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const InstagramIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.412.06 3.808s-.012 2.74-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.412.06-3.808.06s-2.74-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.412-.06-3.808s.012-2.74.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.341 3.65c.636-.247 1.363-.416 2.427-.465C9.784 2.013 10.13 2 12.315 2zM12 7.042c-2.733 0-4.952 2.22-4.952 4.958s2.22 4.958 4.952 4.958 4.958-2.22 4.958-4.958-2.226-4.958-4.958-4.958zM12 15a3 3 0 110-6 3 3 0 010 6z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.389 0-1.601 1.086-1.601 2.206v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.368 7.161a1.796 1.796 0 01-1.8-1.796A1.796 1.796 0 015.368 3.57a1.796 1.796 0 011.8 1.795 1.796 1.796 0 01-1.8 1.796zm1.536 9.177H3.832v-8.59h3.072v8.59z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const TwitterIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
  </svg>
);

const CompanyPage = () => {
    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.onclickinfotech.com/"
        }, {
            "@type": "ListItem",
            "position": 2,
            "name": "Company",
            "item": "https://www.onclickinfotech.com/company"
        }]
    };

  return (
    <div className="company-page">
      <SEO 
        title="Our Company & Leadership"
        description="Meet the leadership team behind Onclick Infotech and learn about our company's core principles, growth strategy, and commitment to excellence in digital innovation."
        url="/company"
        image={heroDashboardImage}
      />
      <StructuredData data={breadcrumbData} />

      <Hero
        title="Company Growth Strategy"
        description="At Onclick Infotech, our growth strategy is built on innovation, client success, and continuous learning. We invest in cutting-edge technologies, nurture top talent, and form strategic partnerships to deliver scalable, future-ready solutions. By staying agile and expanding globally, we drive sustainable growth while helping our clients thrive in an ever-evolving digital world."
        image={heroDashboardImage}
        imageAlt="Onclick Infotech Company Growth"
        imageOnLeft={false}
      />

      <section
        className="image-title-section"
        style={{ "--bg-image": `url(${TitleIcon})` }}
      >
        <h1 className="image-title">Our Leadership Team</h1>
      </section>

      <section className="team-section-new-circle">
        <div className="team-member-circle">
          <img src={jayTejani} alt="Jay Tejani, Director" loading="lazy" />
          <div className="team-info-circle">
            <h3 className="team-name-circle">Jay Tejani</h3>
            <p className="team-title-circle">Director</p>
            <div className="team-social-links-circle">
              <a
                href="https://www.facebook.com/jay.tejani.75"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jay Tejani's Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/jay_tejani_/profilecard/?igsh=MTM2b2lub3FtbGFwaA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jay Tejani's Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/jay-tejani-529743217/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jay Tejani's LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://x.com/jay_tejani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jay Tejani's Twitter"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="team-member-circle">
          <img src={arshKukadiya} alt="Arsh Kukadiya, Director" loading="lazy" />
          <div className="team-info-circle">
            <h3 className="team-name-circle">Arsh Kukadiya</h3>
            <p className="team-title-circle">Director</p>
            <div className="team-social-links-circle">
              <a
                href="#facebook"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arsh Kukadiya's Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#instagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arsh Kukadiya's Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="#linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arsh Kukadiya's LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#twitter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arsh Kukadiya's Twitter"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="details-wrapper">
        <div className="section-header">
          <h2>Our Core Principles</h2>
          <p>
            We are committed to delivering excellence through our core
            principles, ensuring every project is guided by substance,
            reliability, and innovation to meet your business needs.
          </p>
        </div>
        <div className="details-container">
          <div className="details-section">
            <div className="img-title-content">
              <img src={guidanceIcon} alt="Guidance Icon" loading="lazy" />
              <div className="inner-content">
                <h2 className="company-section-title">Substantial Guidance</h2>
                <p className="company-section-content">
                  we provide expert guidance at every step, ensuring your
                  projects are strategically planned and flawlessly executed for
                  maximum success.
                </p>
              </div>
            </div>
          </div>
          <div className="details-section">
            <div className="img-title-content">
              <img src={assistanceIcon} alt="24/7 Assistance Icon" loading="lazy" />
              <div className="inner-content">
                <h2 className="company-section-title">
                  24/7 Perpetual Assistance
                </h2>
                <p className="company-section-content">
                  Our dedicated support team is available around the clock,
                  offering reliable and immediate assistance to keep your
                  business running without interruptions.
                </p>
              </div>
            </div>
          </div>
          <div className="details-section">
            <div className="img-title-content">
              <img src={alternativesIcon} alt="Alternatives Icon" loading="lazy" />
              <div className="inner-content">
                <h2 className="company-section-title">
                  Desirable Alternatives
                </h2>
                <p className="company-section-content">
                  We present smart, flexible solutions tailored to your unique
                  needs, giving you the freedom to choose the best path for your
                  business growth.
                </p>
              </div>
            </div>
          </div>
          <div className="details-section">
            <div className="img-title-content">
              <img src={analysisIcon} alt="Analysis Icon" loading="lazy" />
              <div className="inner-content">
                <h2 className="company-section-title">
                  Opinion Research and Analysis
                </h2>
                <p className="company-section-content">
                  To know volumes and preference patterns of potential market,
                  we do analyze numbers and assess the qualitative insides of
                  current market size.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="About-Onclick-Infotech-Work-Stations-and-Spaces">
        <div className="company-about-section-padding about-section">
          <div className="about-company-container">
            <div className="company-about-text-box">
              <h2>About Onclick Infotech</h2>
              <p>
                We are the Competent Professionals from diverse backgrounds,
                later became a strong team with long term technically viable
                force. Our elemental intent is to contribute to the global
                business services at different capacities, such as Android/iOS
                Application development, Marketing and Nurturing of
                applications.
              </p>
              <p>
                We believe in superior services which always results in building
                of reputation among our clients and subscribers.
              </p>
              <p>
                Onclick Infotech is extremely specific when it comes to
                practicing global standards and ethical practices. We always
                keep in mind our motto and mission while achieving our goals. We
                have been constantly working on the processes and techniques
                which benefit the clients. We never compromise quality over
                anything. Experiences and Challenges have taught us to bring
                down costs and maintain state of art services. One can also
                notice our commitment through our existing products and
                services.
              </p>
            </div>
            <div className="company-about-image-box">
              <img src={aboutImg} alt="Team collaborating at Onclick Infotech" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="company-about-section-padding workstations-section">
          <div className="about-company-container">
            <div className="company-about-image-box">
              <img src={workstationsImg} alt="Modern workstations at Onclick Infotech" loading="lazy" />
            </div>
            <div className="company-about-text-box">
              <h2>Work Stations and Spaces</h2>
              <p>
                At Onclick Infotech, our workstations are thoughtfully designed
                to inspire innovation, collaboration, and productivity. We offer
                a modern, fully equipped workspace featuring the latest
                technology, ergonomic setups, and a vibrant atmosphere that
                fosters creativity.
              </p>
              <p>
                Our spaces are structured to encourage open communication while
                ensuring privacy for focused tasks. Whether collaborating on
                complex projects or brainstorming breakthrough ideas, our teams
                enjoy an environment that energizes and empowers them every day.
              </p>
              <p>
                We believe that great ideas thrive in the right setting — that's
                why we prioritize comfort, efficiency, and a culture of seamless
                teamwork across all our workstations and spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyPage;
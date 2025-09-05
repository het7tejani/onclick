import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";

// --- ASSET IMPORTS ---
// Client logos
import clientLogo1 from "../assets/about/logo/1.png";
import clientLogo2 from "../assets/about/logo/2.png";
import clientLogo7 from "../assets/about/logo/7.png";
import clientLogo8 from "../assets/about/logo/8.png";
import clientLogo9 from "../assets/about/logo/9.png";
import clientLogo10 from "../assets/about/logo/10.png";
import clientLogo11 from "../assets/about/logo/11.png";
import clientLogo12 from "../assets/about/logo/12.png";
import clientLogo13 from "../assets/about/logo/13.png";
import clientLogo14 from "../assets/about/logo/14.png";
import clientLogo15 from "../assets/about/logo/15.png";
import clientLogo16 from "../assets/about/logo/16.png";
import clientLogo17 from "../assets/about/logo/17.png";
import clientLogo18 from "../assets/about/logo/18.png";
import clientLogo19 from "../assets/about/logo/19.png";
import clientLogo20 from "../assets/about/logo/20.png";
import clientLogo21 from "../assets/about/logo/21.png";
import clientLogo22 from "../assets/about/logo/22.png";
import clientLogo24 from "../assets/about/logo/24.png";
import clientLogo26 from "../assets/about/logo/26.png";

// New section images
import aboutMissionImage from "../assets/about/mission.avif";
import ourStoryImage from "../assets/about/story.avif";

const clientLogos = [
  { src: clientLogo21, alt: "HDFC Bank" },
  { src: clientLogo18, alt: "SBI" },
  { src: clientLogo19, alt: "GIF" },
  { src: clientLogo20, alt: "Shah Investment" },
  { src: clientLogo17, alt: "Bandhan" },
  { src: clientLogo22, alt: "Costa Coffee" },
  { src: clientLogo7, alt: "Rajhans" },
  { src: clientLogo8, alt: "Cognizant" },
  { src: clientLogo9, alt: "Patidar" },
  { src: clientLogo10, alt: "P.P.Savani" },
  { src: clientLogo2, alt: "icon" },
  { src: clientLogo15, alt: "BAPS" },
  { src: clientLogo26, alt: "Benchmark" },
  { src: clientLogo16, alt: "Gas mate" },
  { src: clientLogo1, alt: "khalas" },
  { src: clientLogo24, alt: "jahiz" },
  { src: clientLogo12, alt: "shiksha" },
  { src: clientLogo13, alt: "CIJ" },
  { src: clientLogo11, alt: "shiksha" },
  { src: clientLogo14, alt: "RCloud" },
];

const faqData = [
  {
    q: "What services does Onclick Infotech provide?",
    a: "Onclick Infotech offers a comprehensive suite of services including custom software development, mobile and web application development, cloud solutions, digital marketing, and IT consulting to help businesses thrive in the digital age.",
  },
  {
    q: "How long has Onclick Infotech been in business?",
    a: "Founded with a vision for digital innovation, Onclick Infotech has been delivering high-quality IT solutions for over five years, building a strong reputation for excellence and client satisfaction.",
  },
  {
    q: "What industries does Onclick Infotech serve?",
    a: "We serve a diverse range of industries, including healthcare, finance, e-commerce, education, and entertainment, providing tailored solutions that meet the unique challenges of each sector.",
  },
  {
    q: "Does Onclick Infotech offer custom software development?",
    a: "Yes, custom software development is one of our core specialties. We work closely with clients to understand their unique requirements and build tailored software solutions that drive efficiency and growth.",
  },
  {
    q: "Does Onclick Infotech provide mobile app development?",
    a: "Yes, we specialize in both iOS and Android mobile app development, delivering intuitive, high-performance apps tailored to your business needs.",
  },
  {
    q: "What technologies does Onclick Infotech use?",
    a: "We leverage a wide range of technologies including JavaScript, Python, PHP, React, Angular, Node.js, Laravel, WordPress, cloud platforms, and more to build modern and scalable solutions.",
  },
  {
    q: "Can Onclick Infotech help with digital marketing?",
    a: "Absolutely. Our digital marketing services include SEO, social media marketing, PPC campaigns, email marketing, and content strategy to boost your brand visibility online.",
  },
  {
    q: "Does Onclick Infotech provide IT consulting services?",
    a: "Yes, our IT consulting services help businesses optimize their technology stack, improve workflows, and implement effective digital strategies for growth.",
  },
  {
    q: "How does Onclick Infotech ensure project quality?",
    a: "We follow best practices in software development, conduct rigorous testing, and maintain clear communication with clients to ensure timely delivery and high-quality results.",
  },
  {
    q: "What is Onclick Infotech’s approach to client support?",
    a: "We provide dedicated support through every stage of the project, including post-launch maintenance, troubleshooting, and updates, ensuring long-term satisfaction.",
  },
  {
    q: "Does Onclick Infotech handle e-commerce solutions?",
    a: "Yes, we build robust e-commerce platforms with features like secure payments, inventory management, and user-friendly interfaces to help businesses sell online effectively.",
  },
  {
    q: "Can Onclick Infotech integrate cloud solutions?",
    a: "Certainly. We provide cloud integration services including migration, deployment, and management on platforms like AWS, Azure, and Google Cloud to improve scalability and reliability.",
  },
  {
    q: "Does Onclick Infotech offer web application development?",
    a: "Yes, we develop modern web applications with responsive designs, scalable architecture, and smooth performance across devices and browsers.",
  },
  {
    q: "How can I get a quote for a project?",
    a: "You can contact our team via email or phone, or fill out the inquiry form on our website. We’ll discuss your requirements and provide a detailed project estimate.",
  },

  {
    q: "How can I get started with Onclick Infotech?",
    a: "Getting started is easy! Simply reach out to us through our <a href='/contact' style='color: #ff7f50; text-decoration: underline;'>Contact Page</a> to schedule a free consultation. We'll discuss your project needs and outline the best path forward.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const PlusIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const MinusIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const SpeechBubbleIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 3H21V17H14L12 21L10 17H3V3Z" fill="black" />
    </svg>
  );

  const SwirlIcon = () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 100 100"
      className="faq-swirl-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50,5 C74.85,5 95,25.15 95,50 C95,74.85 74.85,95 50,95 C25.15,95 5,74.85 5,50 C5,35 15,15 30,10"
        fill="none"
        stroke="#499DD0"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M50,15 C69.33,15 85,30.67 85,50 C85,69.33 69.33,85 50,85 C30.67,85 15,69.33 15,50 C15,38 22,25 35,20"
        fill="none"
        stroke="#499DD0"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className="faq-section-new-wrapper">
      <section className="faq-section-new">
        <div className="faq-content-wrapper">
          <div className="faq-left">
            <div className="faq-title-header">
              <SwirlIcon />
              <h1>Frequently asked questions</h1>
            </div>
            <div className="faq-accordion">
              {faqData.map((faq, index) => (
                <div
                  className={`faq-item-new ${
                    openIndex === index ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => toggleFaq(index)}
                  onKeyPress={(e) => e.key === "Enter" && toggleFaq(index)}
                  role="button"
                  tabIndex="0"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="faq-question-new">
                    <span>{faq.q}</span>
                    <span className="faq-icon">
                      {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </h3>
                  <div className="faq-answer-new">
                    <div dangerouslySetInnerHTML={{ __html: faq.a }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="faq-right">
            <div className="more-questions-card">
              <div className="more-questions-icon-wrapper">
                <SpeechBubbleIcon />
              </div>
              <h2>Do you have more questions?</h2>
              <p>
                End-to-end payments and financial management in a single
                solution. Meet the right platform to help realize.
              </p>
              <Link to="/contact" className="btn-direct-mail">
                Shoot a Direct Mail
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="client-section-wrapper">
        <section className="container">
          <div className="our_client_title">
            <h2>Our Clients</h2>
            <p>
              Onclick Infotech collaborates with diverse industries, providing
              top-notch solutions in mobile and web development, AI-ML
              applications, and IT consulting, fostering long-lasting
              partnerships.
            </p>
          </div>
          <ul className="main_container">
            {clientLogos.map((logo, index) => (
              <li className="item" key={index}>
                <a href="#clients">
                  <img loading="lazy" src={logo.src} alt={logo.alt} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mission-story-section mission">
        <div className="container">
          <div className="mission-story-content">
            <h2>Our Mission</h2>
            <p>
              To empower businesses with transformative digital solutions. We
              are dedicated to delivering innovative software, fostering growth
              through technology, and building long-lasting partnerships based
              on trust and excellence. We strive to make technology accessible
              and impactful for every client, helping them navigate the digital
              landscape with confidence.
            </p>
          </div>
          <div className="mission-story-image">
            <img src={aboutMissionImage} alt="Our Mission" />
          </div>
        </div>
      </section>

      <section className="mission-story-section story">
        <div className="container">
          <div className="mission-story-image">
            <img src={ourStoryImage} alt="Our Story" />
          </div>
          <div className="mission-story-content">
            <h2>Our Story</h2>
            <p>
              Founded by a team of passionate tech enthusiasts, Onclick Infotech
              began with a simple goal: to build exceptional digital products.
              From our early days as a small startup, we've grown into a global
              team of experts, driven by a relentless pursuit of innovation. Our
              journey has been one of continuous learning, adapting to new
              technologies, and celebrating the success of our clients. We're
              proud of how far we've come and excited for what the future holds.
            </p>
          </div>
        </div>
      </section>

      <FaqSection />
    </div>
  );
};

export default AboutPage;

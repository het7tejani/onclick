import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";

// --- ASSET IMPORTS ---
// Client logos
import clientLogo1 from "../assets/about/logo/1.webp";
import clientLogo2 from "../assets/about/logo/2.webp";
import clientLogo7 from "../assets/about/logo/7.webp";
import clientLogo8 from "../assets/about/logo/8.webp";
import clientLogo9 from "../assets/about/logo/9.webp";
import clientLogo10 from "../assets/about/logo/10.webp";
import clientLogo11 from "../assets/about/logo/11.webp";
import clientLogo12 from "../assets/about/logo/12.webp";
import clientLogo13 from "../assets/about/logo/13.webp";
import clientLogo14 from "../assets/about/logo/14.webp";
import clientLogo15 from "../assets/about/logo/15.webp";
import clientLogo16 from "../assets/about/logo/16.webp";
import clientLogo17 from "../assets/about/logo/17.webp";
import clientLogo18 from "../assets/about/logo/18.webp";
import clientLogo19 from "../assets/about/logo/19.webp";
import clientLogo20 from "../assets/about/logo/20.webp";
import clientLogo21 from "../assets/about/logo/21.webp";
import clientLogo22 from "../assets/about/logo/22.webp";
import clientLogo24 from "../assets/about/logo/24.webp";
import clientLogo26 from "../assets/about/logo/26.webp";

// New section images
import aboutMissionImage from "../assets/about/mission.avif";

// Timeline Images
import historyImage from "../assets/about/timeline.avif";
import projectImage from "../assets/about/timeline.avif";
import expansionImage from "../assets/about/timeline.avif";
import globalImage from "../assets/about/timeline.avif";
import innovationImage from "../assets/about/timeline.avif";

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
    q: "How can I get started with Onclick Infotech?",
    a: "Getting started is easy! Simply reach out to us through our <a href='/contact' style='color: var(--primary); text-decoration: underline;'>Contact Page</a> to schedule a free consultation. We'll discuss your project needs and outline the best path forward.",
  },
  {
  q: "Where is Onclick Infotech located?",
  a: "Onclick Infotech is headquartered in India, with a global client base spanning across the US, UK, and other regions. We serve businesses worldwide with our remote-first approach.",
},
{
  q: "What makes Onclick Infotech different from other IT companies?",
  a: "Our focus on innovation, client-first strategies, and end-to-end digital solutions sets us apart. We combine technical expertise with a deep understanding of business needs to deliver measurable results.",
},
{
  q: "Does Onclick Infotech provide support after project delivery?",
  a: "Absolutely! We believe in long-term partnerships. Our team offers continuous support, maintenance, and upgrades to ensure your software and applications run smoothly.",
},
{
  q: "Can Onclick Infotech help with digital transformation?",
  a: "Yes, digital transformation is one of our key strengths. From migrating legacy systems to modern cloud-based platforms, we help businesses embrace new technologies and achieve sustainable growth.",
},
{
  q: "What technologies does Onclick Infotech specialize in?",
  a: "Our expertise covers modern technologies such as React, Angular, Node.js, PHP, Python, AI/ML, cloud platforms (AWS, Azure, GCP), and robust mobile app frameworks like Flutter and React Native.",
},
{
  q: "Does Onclick Infotech work with startups as well as enterprises?",
  a: "Yes, we collaborate with businesses of all sizes—from innovative startups to large enterprises—offering scalable and flexible solutions tailored to each stage of growth.",
},
{
  q: "How does Onclick Infotech ensure project quality?",
  a: "We follow agile methodologies, rigorous testing practices, and continuous client feedback to deliver reliable, high-quality solutions on time and within budget.",
},
];

const Timeline = () => {
  const timelineData = [
    {
      year: "2019",
      title: "The Beginning",
      description:
        "Onclick Infotech was founded by a team of passionate tech enthusiasts with a shared vision to build exceptional digital products.",
      image: historyImage,
    },
    {
      year: "2020",
      title: "First Major Project",
      description:
        "Successfully launched our first large-scale enterprise application, establishing our reputation for quality and reliability.",
      image: projectImage,
    },
    {
      year: "2021",
      title: "Expanding Horizons",
      description:
        "Grew our team and expanded our service offerings to include cloud solutions and advanced digital marketing.",
      image: expansionImage,
    },
    {
      year: "2022",
      title: "Global Reach",
      description:
        "Began serving international clients, building strong partnerships in the USA, UK, and beyond.",
      image: globalImage,
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description:
        "Launched our dedicated AI & Machine Learning division to explore and implement cutting-edge technologies for our clients.",
      image: innovationImage,
    },
    {
      year: "2025",
      title: "International Reach",
      description:
        "Launched our dedicated AI & Machine Learning division to explore and implement cutting-edge technologies for our clients.",
      image: innovationImage,
    },
  ];

  const sectionRef = useRef(null);
  const progressRef = useRef(null);
  const itemsRef = useRef([]);
  const dotsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, timelineData.length);
    dotsRef.current = dotsRef.current.slice(0, timelineData.length);
  }, [timelineData]);

  useEffect(() => {
    const progressEl = progressRef.current;
    const items = itemsRef.current;
    if (!progressEl || !items || items.length === 0) return;
    const firstItem = items[0];
    if (!firstItem) return;

    const handleScroll = () => {
      const firstItem = itemsRef.current[0];
      const lastItem = itemsRef.current[itemsRef.current.length - 1];
      const progressEl = progressRef.current;
      if (!firstItem || !lastItem || !progressEl) return;

      const screenCenter = window.innerHeight / 2;
      const firstItemRect = firstItem.getBoundingClientRect();
      const firstItemTop = firstItemRect.top;

      const progressHeight = screenCenter - firstItemTop;
      const totalHeight =
        lastItem.offsetTop + lastItem.offsetHeight - firstItem.offsetTop;

      const clampedHeight = Math.max(0, Math.min(progressHeight, totalHeight));
      progressEl.style.height = `${clampedHeight}px`;

      itemsRef.current.forEach((item, index) => {
        const dot = dotsRef.current[index];
        if (!item || !dot) return;
        
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top < screenCenter) {
          item.classList.add("is-scrolled-past");
          dot.classList.add("visible");
        } else {
          item.classList.remove("is-scrolled-past");
          dot.classList.remove("visible");
        }
      });
    };

    const setupTimeline = () => {
      const firstItem = itemsRef.current[0];
      const progressEl = progressRef.current;
      if (!firstItem || !progressEl) return;

      const startY = firstItem.offsetTop;
      progressEl.style.top = `${startY}px`;

      handleScroll();
    };

    setupTimeline();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", setupTimeline, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", setupTimeline);
    };
  }, [timelineData]);

  return (
    <section className="timeline-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Our Journey</h2>
          <p>
            Tracing the milestones that have shaped our story of growth and
            innovation.
          </p>
        </div>
        <div className="timeline-container">
          <div className="timeline-axis"></div>
          <div className="timeline-progress-bar" ref={progressRef}></div>
          <div className="timeline-items-wrapper">
            {timelineData.map((item, index) => (
              <div
                className="timeline-item"
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
              >
                <div className="timeline-dot" ref={el => (dotsRef.current[index] = el)}></div>
                <div className="timeline-content">
                  <div className="timeline-image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <div className="timeline-text">
                    <span className="timeline-year">{item.year}</span>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

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

  const FaqTitleIcon = () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      className="faq-title-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75c-.37.34-.67.63-.87.88-.2.25-.33.52-.33.87h-2c0-.68.22-1.28.66-1.72.43-.44.95-.83 1.28-1.12.34-.29.56-.6.56-.98 0-.55-.45-1-1-1s-1 .45-1 1H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
        fill="var(--primary)"
        fillOpacity="0.2"
      />
      <path
        d="M12 4c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 .38-.22.69-.56.98-.33.29-.85.68-1.28 1.12-.44.44-.66 1.04-.66 1.72h2c0-.35.13-.62.33-.87.2-.25.5-.54.87-.88.57-.57.93-1.37.93-2.25 0-2.21-1.79-4-4-4zm-1 14h2v-2h-2v2z"
        fill="var(--primary)"
      />
    </svg>
  );

  return (
    <div className="faq-section-new-wrapper">
      <section className="faq-section-new">
        <div className="faq-content-wrapper">
          <div className="faq-left">
            <div className="faq-title-header">
              <FaqTitleIcon />
              <h1>Frequently asked questions</h1>
            </div>
            <div className="faq-accordion">
              {faqData.map((faq, index) => (
                <div
                  className="faq-item-new"
                  data-active={openIndex === index}
                  key={index}
                >
                  <h3 className="faq-question-new">
                    <button
                        onClick={() => toggleFaq(index)}
                        aria-expanded={openIndex === index}
                        aria-controls={`faq-answer-${index}`}
                    >
                        <span>{faq.q}</span>
                        <span className="faq-icon">
                          {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                        </span>
                    </button>
                  </h3>
                  <div id={`faq-answer-${index}`} className="faq-answer-new" hidden={openIndex !== index}>
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
              <Link to="/contact" className="btn-secondary">
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
            "name": "About Us",
            "item": "https://www.onclickinfotech.com/about"
        }]
    };

    const faqSchemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a.replace(/<[^>]*>?/gm, '') // Strip HTML for schema
            }
        }))
    };

  return (
    <div className="about-page">
      <SEO 
        title="About Us | Our Mission & Journey"
        description="Learn about Onclick Infotech's mission to empower businesses with transformative digital solutions. Discover our journey, our values, and the clients we've served."
        url="/about"
        image={aboutMissionImage}
      />
      <StructuredData data={breadcrumbData} />
      <StructuredData data={faqSchemaData} />

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
            <img src={aboutMissionImage} alt="Our Mission" loading="lazy" />
          </div>
        </div>
      </section>

      <Timeline />

      <FaqSection />
    </div>
  );
};

export default AboutPage;
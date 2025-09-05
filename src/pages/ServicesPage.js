import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./ServicesPage.css";
import Hero from '../components/home/Hero';
import heroDashboardImage from '../assets/home/success story.png';

import webImg from "../assets/services/web.png";
import mobileImg from "../assets/services/mobile.png";
import digitalImg from "../assets/services/digital.png";
import cloudImg from "../assets/services/cloud.png";

const helpItemsData = [
  {
    step: "Step 01",
    title: "Discovery & Strategy",
    description: "We start by understanding your vision. Our team collaborates with you to define project goals, identify challenges, and create a strategic roadmap. This phase includes market research, requirement analysis, and wireframing to ensure a solid foundation for your project.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop",
    imageAlt: "Team collaborating on a project strategy",
    layout: "image-left",
    link: "/contact"
  },
  {
    step: "Step 02",
    title: "Design & Development",
    description: "Our designers and developers bring your ideas to life with clean, efficient code and intuitive user interfaces. Following agile methodologies, we build, test, and iterate to create a product that is not only functional but also scalable, secure, and beautiful.",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Developer coding on a modern computer setup",
    layout: "image-right",
    link: "/services/web-development"
  },
  {
    step: "Step 03",
    title: "Deployment & Support",
    description: "We handle the entire deployment process to ensure a smooth launch. After your project goes live, we provide ongoing support and maintenance to keep it running at peak performance, ensuring long-term success and continuous improvement.",
    image: "https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?cs=srgb&dl=pexels-lee-campbell-18167-115655.jpg&fm=jpg",
    imageAlt: "Man monitoring server dashboards",
    layout: "image-left",
    link: "/services/cloud-solutions-and-devops"
  }
];

const HelpSection = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <section className="help-section-container">
      <div className="help-section-header">
        <h2>How We Turn Ideas into Reality</h2>
        <p>Our process is designed to be collaborative, transparent, and efficient, ensuring we deliver high-quality digital solutions that meet your goals.</p>
      </div>
      <div className="help-items-wrapper">
        {helpItemsData.map((item, index) => (
          <div
            className={`help-item ${item.layout === 'image-right' ? 'reverse' : ''}`}
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <div className="help-image-wrapper">
              <div className="help-image-blob"></div>
              <div className="help-image-container">
                <img src={item.image} alt={item.imageAlt} />
              </div>
            </div>
            <div className="help-text-container">
              <p className="help-item-step">{item.step}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={item.link} className="help-learn-more-link">
                Learn More <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


const servicesData = [
  {
    title: "Web Development",
    description:
      "We build fast, secure, and scalable websites and web apps using modern technologies like React, Node.js, and Python. Our solutions include custom websites, e-commerce platforms, and web applications with responsive design, API integrations, and CMS options. Focused on performance and user experience, we deliver tailored web solutions to grow your business.",
    points: [
      "Frontend Development",
      "Backend Development",
      "CMS Development",
      "Web Application Development",
      "Website Maintenance and Support",
    ],
    image: webImg,
    link: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Our cutting-edge mobile technology provides intelligent solutions for your business needs. Leveraging native and cross-platform frameworks, we deliver high-performance apps that automate complex processes to boost your productivity and efficiency.",
    points: [
      "Android App Development",
      "iOS App Development",
      "Cross-platform App Development",
      "App UI/UX Design",
      "App Testing and Quality Assurance",
    ],
    image: mobileImg,
    link: "/services/mobile-app-development",
  },
  {
    title: "Digital Marketing",
    description:
      "Our comprehensive digital marketing strategies provide intelligent solutions for your business needs. Leveraging SEO, PPC, and content marketing, we deliver targeted campaigns and automate processes to boost your reach and engagement.",
    points: [
      "SEO (Search Engine Optimization)",
      "PPC (Pay-Per-Click Advertising)",
      "Content Marketing",
      "Email Marketing Campaigns",
      "Social Media Marketing (SMM)",
    ],
    image: digitalImg,
    link: "/services/digital-marketing",
  },
  {
    title: "Cloud Solutions and DevOps",
    description:
      "Our advanced cloud and DevOps solutions provide intelligent infrastructure for your business needs. Leveraging automation and scalable architecture, we deliver reliable deployments and streamline complex processes to boost your productivity and efficiency.",
    points: [
      "Cloud Application Development",
      "Cloud Migration Services",
      "DevOps Automation and Consulting",
      "Infrastructure Setup and Management",
      "Cloud Security Solutions",
    ],
    image: cloudImg,
    link: "/services/cloud-solutions-and-devops",
  },
];

const ServicesPage = () => {
  const containerRef = useRef(null);
  const stackItemsRef = useRef([]);
  const numItems = servicesData.length;

  useEffect(() => {
    stackItemsRef.current.forEach((item, index) => {
      if (item) {
        item.style.zIndex = numItems - index;
      }
    });
  }, [numItems]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { top: containerTop } = container.getBoundingClientRect();
      const vh = window.innerHeight / 100;
      const animationDistance = (numItems - 1) * 80 * vh;
      const scrollAmount = -containerTop;
      const progress = Math.max(0, Math.min(1, scrollAmount / animationDistance));
      
      const cardsScrolled = progress * (numItems - 1);
      const activeIndex = Math.floor(cardsScrolled);
      const transitionProgress = cardsScrolled - activeIndex;

      stackItemsRef.current.forEach((item, index) => {
        if (!item) return;

        const positionRelativeToActive = index - activeIndex;

        let scale = 1;
        let translateY = 0;
        let opacity = 1;

        if (positionRelativeToActive < 0) {
          opacity = 0;
          translateY = -50;
          scale = 0.95;
        } else if (positionRelativeToActive === 0) {
          scale = 1 - (transitionProgress * 0.05);
          translateY = -transitionProgress * 50;
          opacity = 1 - transitionProgress;
        } else {
          const currentPosition = positionRelativeToActive - transitionProgress;
          if (currentPosition < 4) {
            scale = 1 - (currentPosition * 0.05);
            translateY = currentPosition * 20;
            opacity = 1;
          } else {
            opacity = 0;
          }
        }
        
        if (progress === 1 && index === numItems - 1) {
            opacity = 1;
            scale = 1;
            translateY = 0;
        }

        item.style.opacity = `${opacity}`;
        item.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [numItems]);

  return (
    <div className="services-page">
      <Hero 
          title="Services we provide in Onclick Infotech"
          description="Onclick Infotech uses modern technologies like React.js, Node.js, PHP, and Laravel for web development, and Flutter, React Native, Swift, and Kotlin for mobile app development. They design with Figma and Adobe XD, manage databases with MySQL, MongoDB, and Firebase, and leverage AWS for cloud solutions. They also explore AI, machine learning, and blockchain for innovative projects."
          buttonText="Get Started"
          buttonLink="/contact"
          image={heroDashboardImage}
          imageAlt="Onclick Infotech Services"
          imageOnLeft={false}
      />

      <HelpSection />

      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive IT solutions tailored to your business needs</p>
        </div>
      </section>

      <div
        className="image-stack-container"
        ref={containerRef}
        style={{ height: `${(numItems - 1) * 80 + 100}vh` }}
      >
        {servicesData.map((service, index) => (
          <div
            className="stack-item"
            key={service.title}
            ref={(el) => (stackItemsRef.current[index] = el)}
          >
            <div className="inner-service-card">
              <div className="inner-left">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <button className="btn">Learn More</button>
                </Link>
              </div>
              <div className="inner-right">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
import React from 'react';
import './HomePage.css';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import InfoSection from '../components/home/InfoSection';
import Services from '../components/home/Services';
import Badges from '../components/home/Badges';
import AIAnalyzerSection from '../components/AIAnalyzerSection';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import successStoryImage from '../assets/home/success story.png';
import priorityImage from '../assets/home/priority.png';
import historyImage from '../assets/home/history.png';
import heroDashboardImage from '../assets/home/hero.avif'
import LogoSlider from '../components/TrustedBy';

const infoSectionsData = [
    {
      title: "Our Success Story",
      listItems: [
        "Started small with a vision to empower businesses digitally",
        "Focused on quality, innovation, and client satisfaction",
        "Quickly adapted to new technologies (React, Flutter, AI, etc.)",
        "Expanded services to web, app development, and digital marketing",
        "Built a strong global client base through trust and performance",
        "Completed <strong>280+</strong> projects with a reputation for excellence",
      ],
      image: successStoryImage,
      buttonText: "Request a quote",
      buttonLink: "/contact",
      imageOnLeft: false,
    },
    {
      title: "Our Priority",
      listItems: [
        "<strong>Founded</strong> with a vision to deliver innovative web and app solutions.",
        "<strong>Started</strong> as a small team, focusing on quality and client satisfaction.",
        "<strong>Grew</strong> by adopting latest technologies like React, Flutter, and AI.",
        "<strong>Expanded</strong> services into UI/UX design, SEO, and digital marketing.",
        "<strong>Built</strong> strong global relationships with clients from the USA, UK, and more.",
        "<strong>Completed</strong> over 280+ successful projects across industries.",
        "<strong>Recognized</strong> for commitment to excellence, trust, and innovation.",
      ],
      image: priorityImage,
      buttonText: "Prioritize your business",
      buttonLink: "/contact",
      imageOnLeft: true,
    },
    {
      title: "Our History",
      listItems: [
        "<strong>Founded:</strong> In the early 2010s by a group of passionate tech enthusiasts.",
        "<strong>Starting Point:</strong> Began as a small freelance team focused on web and mobile development.",
        "<strong>First Breakthrough:</strong> Gained recognition through high-quality projects on freelance platforms like Upwork.",
        "<strong>Growth Phase:</strong> Expanded services to UI/UX design, SEO, and full digital solutions.",
        "<strong>Global Reach:</strong> Started serving international clients, building strong partnerships.",
        "<strong>Today:</strong> Recognized as a trusted IT company delivering innovative tech solutions worldwide.",
      ],
      image: historyImage,
      buttonText: null,
      imageOnLeft: false,
    },
  ];

const HomePage = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Onclick Infotech",
        "url": "https://www.onclickinfotech.com",
        "logo": "https://www.onclickinfotech.com/logo512.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-95635-75423",
            "contactType": "Customer Service"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.onclickinfotech.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.onclickinfotech.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };


    return (
        <div className="homepage-wrapper">
             <SEO 
              title="Innovative Web & Mobile App Development"
              description="Onclick Infotech delivers custom web and mobile solutions, AI/ML applications, and IT consulting to drive digital transformation. Partner with us for scalable, secure, and efficient systems."
              url="/"
              image={heroDashboardImage}
            />
            <StructuredData data={organizationSchema} />
            <StructuredData data={websiteSchema} />

             <Hero 
                title="Onclick Infotech"
                description="We develop innovative software solutions, provide IT consulting, and deliver cutting-edge technology services. Our team specializes in web/mobile app development, cloud computing, cybersecurity, and AI solutions, helping businesses optimize operations and achieve digital transformation with scalable, secure, and efficient systems."
                buttonText="Get Started"
                buttonLink="/contact"
                image={heroDashboardImage}
                imageAlt="Dashboard preview"
                imageOnLeft={false}
            />
            <Stats />
            <div className="info-section-background">
              {infoSectionsData.map((section, index) => (
                  <InfoSection 
                      key={index}
                      title={section.title}
                      listItems={section.listItems}
                      image={section.image}
                      buttonText={section.buttonText}
                      buttonLink={section.buttonLink}
                      imageOnLeft={section.imageOnLeft}
                  />
              ))}
            </div>
            {/* <TrustedBy /> */}
            <LogoSlider/>
            <Services />
            <AIAnalyzerSection />
            <Badges />
        </div>
    );
};

export default HomePage;
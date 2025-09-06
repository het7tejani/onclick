import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import webLogo from '../../assets/home/service card logo/web.png';
import mobileAppLogo from '../../assets/home/service card logo/mobile app.png';
import cloudLogo from '../../assets/home/service card logo/cloud.png';
import databaseLogo from '../../assets/home/service card logo/database.png';
import devopsLogo from '../../assets/home/service card logo/devops.png';
import globalLogo from '../../assets/home/service card logo/global.png';

const servicesData = [
    {
        icon: webLogo,
        title: "Web Development",
        description: "Design, develop, and maintain websites and web applications using HTML, CSS, JavaScript, and frameworks like React or Angular. Ensure responsive design, optimize performance, and integrate APIs.",
        link: "/services/web-development"
    },
    {
        icon: mobileAppLogo,
        title: "Mobile Application",
        description: "Design, develop, and maintain high-performance iOS/Android apps using Swift, Kotlin, or cross-platform tools (Flutter/React Native). Collaborate with UI/UX designers, integrate APIs, and ensure app scalability.",
        link: "/services/mobile-app-development"
    },
    {
        icon: cloudLogo,
        title: "Cloud Solution",
        description: "Google Cloud provides scalable cloud computing, storage, and networking solutions. It offers AI/ML tools, data analytics, and hybrid/multi-cloud services. We design, deploy, and manage secure cloud infrastructure.",
        link: "/services/cloud-solutions-and-devops"
    },
    {
        icon: databaseLogo,
        title: "Database",
        description: "Manages, maintains, and secures databases to ensure optimal performance, integrity, and availability. Designs, implements, and troubleshoots database systems, performs backups, optimizes queries, and enforces security protocols.",
        link: "/technologies/database"
    },
    {
        icon: devopsLogo,
        title: "Infra and Devops",
        description: "Manages infrastructure and automates software delivery pipelines. Utilizes tools like Docker, Kubernetes, and CI/CD to ensure seamless deployment, monitoring, and scaling of applications, enhancing reliability and efficiency.",
        link: "/technologies/infra-devops"
    },
    {
        icon: globalLogo,
        title: "Global Communication",
        description: "Global communication refers to the exchange of information, ideas, and messages across international borders, facilitated by technology, media, and language. It fosters understanding, collaboration, and connection.",
        link: "/services/digital-marketing"
    }
];

const Services = () => {
    return (
        <section className="featured-services">
            <div className="container">
                <div className="featured-services-heading-2">
                    <h2>Our Featured Services</h2>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="heading-services-card">
                                <div className="icon-image"><img src={service.icon} alt={`${service.title} icon`} /></div>
                                <h3>{service.title}</h3>
                            </div>
                            <p>{service.description}</p>
                            <Link to={service.link} className="btn-primary">Read More</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
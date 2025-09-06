import React from 'react';
import { Link } from 'react-router-dom';
import './TechnologiesPage.css'
import Hero from '../components/home/Hero';


// It is assumed you have added these assets to your project directory


import heroDashboardImage from '../assets/home/success story.png';
import mobileImg from '../assets/technologies/mobile.png';
import frontendImg from '../assets/technologies/frontend.png';
import backendImg from '../assets/technologies/backend.png';
import databaseImg from '../assets/technologies/database.png';
import devopsImg from '../assets/technologies/devops.png';
import cmsImg from '../assets/technologies/cms.png';

const techData = [
    {
        area: "one",
        image: mobileImg,
        title: "Mobile",
        description: "We offer custom mobile app development services for Android, iOS, and cross-platform solutions. Using technologies like Flutter, React Native, Swift, and Kotlin, we create user-friendly, secure, and high-performance apps that help businesses grow and engage their customers.",
        link: "/technologies/mobile"
    },
    {
        area: "two",
        image: frontendImg,
        title: "Front End",
        description: "Front-end development focuses on building the visual and interactive parts of websites and applications. It involves using technologies like HTML, CSS, JavaScript, and modern frameworks such as React, Angular, and Vue.js.",
        link: "/technologies/front-end"
    },
    {
        area: "three",
        image: backendImg,
        title: "Back End",
        description: "Backend development focuses on building the server-side of applications, handling databases, APIs, and application logic. It ensures that the front-end functions smoothly by managing data flow, security, and performance.",
        link: "/technologies/back-end"
    },
    {
        area: "four",
        image: databaseImg,
        title: "Database",
        description: "A database is a structured system for storing, managing, and retrieving data efficiently. In an IT company, databases are crucial for handling client information, project data, application backends, and internal operations.",
        link: "/technologies/database"
    },
    {
        area: "five",
        image: devopsImg,
        title: "Infra & Devops",
        description: "Infrastructure and DevOps ensure reliable systems and faster software delivery. Infrastructure manages servers, cloud, and networks, while DevOps automates development, testing, and deployment to improve efficiency, scalability, and security.",
        link: "/technologies/infra-devops"
    },
    {
        area: "six",
        image: cmsImg,
        title: "CMS",
        description: "A CMS (Content Management System) helps IT companies easily create, manage, and update website content without needing deep technical skills. It streamlines web development and improves efficiency.",
        link: "/technologies/cms"
    }
];

const TechnologiesPage = () => {
    return (
        <div className="technologies-page">
            <Hero 
                title="Technologies of Onclick Infotech"
                description="Onclick Infotech uses modern technologies like React.js, Node.js, PHP, and Laravel for web development, and Flutter, React Native, Swift, and Kotlin for mobile app development."
                buttonText="Get Started"
                buttonLink="/contact"
                image={heroDashboardImage}
                imageAlt="Onclick Infotech Technologies"
                imageOnLeft={false}
            />

            <section className="page-header">
                <div className="container">
                    <h1>Technologies We Use</h1>
                    <p>Comprehensive IT solutions tailored to your business needs</p>
                </div>
            </section>

            <div className="service-technology-grid container">
                {techData.map(tech => (
                    <div className={`services-grid-box ${tech.area}`} key={tech.area}>
                        <div className="ideas-sec-hover">
                            <div className="first-ideas">
                                <img src={tech.image} alt={tech.title} />
                            </div>
                            <div className="second-ideas">
                                <h2>{tech.title}</h2>
                                <p>{tech.description}</p>
                            </div>
                            <div className="third-ideas">
                                <Link to={tech.link} className="btn-primary">View More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologiesPage;
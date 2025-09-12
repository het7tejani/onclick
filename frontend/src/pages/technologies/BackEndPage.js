import React from 'react';
import './BackEndPage.css';
import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';

// Import reusable components
import ServiceHero from '../../components/services/ServiceHero';
import FeatureShowcase from '../../components/services/FeatureShowcase';
import CardGrid from '../../components/services/CardGrid';
import ServiceDetail from '../../components/services/ServiceDetail';

// --- ASSET IMPORTS ---
import mainImg from '../../assets/technology/back-end/main.webp';
import badgeDjango from '../../assets/technology/back-end/django python.png';
import badgeJwt from '../../assets/technology/back-end/JWT.png';
import badgePhp from '../../assets/technology/back-end/php logo.png';
import badgeFlask from '../../assets/technology/back-end/flask logo.png';

import cardCore from '../../assets/technology/back-end/core launguage.png';
import cardFrameworks from '../../assets/technology/back-end/Frameworks & APIs.png';
import cardDb from '../../assets/technology/back-end/database.png';
import cardAuth from '../../assets/technology/back-end/Authentication & Security.png';

import detailNode from '../../assets/technology/back-end/Node.js.png';
import detailPhp from '../../assets/technology/back-end/PHP.png';
import detailAsp from '../../assets/technology/back-end/ASP.NET.png';
import detailJava from '../../assets/technology/back-end/Java.png';
import detailPython from '../../assets/technology/back-end/Python.png';
import detailLaravel from '../../assets/technology/back-end/Laravel.png';

const heroBadges = [
    { src: badgeDjango, alt: 'Django' },
    { src: badgeJwt, alt: 'JWT' },
    { src: badgePhp, alt: 'PHP' },
    { src: badgeFlask, alt: 'Flask' },
];

const showcaseFeatures = [
    { key: 'JWT', title: 'JWT (JSON Web Tokens)', desc: 'We implement stateless, secure authentication using JSON Web Tokens. JWTs are a compact, URL-safe means of representing claims to be transferred between two parties, making them ideal for authenticating APIs and securing single-page applications.' },
    { key: 'Fastify', title: 'Fastify', desc: 'For applications that demand high performance, we use Fastify, a web framework for Node.js that boasts incredibly low overhead. It\'s designed to be highly extensible through plugins and provides a great developer experience without sacrificing speed.' },
    { key: 'Django', title: 'Django', desc: 'Leveraging Python\'s "batteries-included" philosophy, Django allows for rapid development of secure and maintainable websites. We use its powerful ORM, admin interface, and built-in security features to build complex, data-driven applications quickly and efficiently.' },
    { key: 'OAuth', title: 'OAuth 2.0', desc: 'We implement OAuth 2.0 to provide secure, delegated access to your application\'s resources. This industry-standard protocol allows third-party applications to access user data without exposing their credentials, enabling secure integrations with services like Google, Facebook, and more.' },
    { key: 'Flask', title: 'Flask', desc: 'For projects that require simplicity and flexibility, we use Flask, a lightweight Python microframework. Flask provides the essentials for web development without imposing a rigid structure, making it perfect for building custom solutions, APIs, and smaller applications.' },
    { key: 'Spring', title: 'Spring Boot', desc: 'When building enterprise-grade Java applications, we rely on Spring Boot. It simplifies the development of stand-alone, production-ready Spring applications with an opinionated approach to configuration, allowing us to build robust, scalable, and maintainable microservices and web apps.' },
    { key: 'RubyOnRails', title: 'Ruby on Rails', desc: 'Following the "convention over configuration" principle, Ruby on Rails is our go-to for rapid application development. Its rich ecosystem of gems and elegant syntax allows us to build and launch full-featured web applications with impressive speed and efficiency.' },
];

const servicesCards = [
    { title: 'Core Languages', desc: 'We specialize in Node.js, Python, and PHP for server-side logic, enabling fast, efficient, and maintainable back-end development.', img: cardCore },
    { title: 'Frameworks & APIs', desc: 'We use frameworks like Express.js, Django, Laravel, and FastAPI to structure our applications, and we build RESTful and GraphQL APIs for seamless integration.', img: cardFrameworks },
    { title: 'Database', desc: 'From relational databases like MySQL and PostgreSQL to NoSQL solutions like MongoDB, we choose the right data store based on your application’s needs.', img: cardDb },
    { title: 'Authentication & Security', desc: 'We implement secure authentication systems using JWT, OAuth, and session-based auth while following OWASP guidelines to safeguard your application.', img: cardAuth }
];

const detailSections = [
    { id: 'node', title: 'Node.js', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech leverages Node.js to build high-speed, scalable, and real-time web applications. Ideal for microservices and APIs, Node.js enables us to deliver performance-intensive backends with rapid development cycles.', description: 'From startups to enterprises, we build robust, event-driven applications that scale with your users and business growth.', img: detailNode, techs: ['Node.js, Express.js, NestJS', 'TypeScript & JavaScript', 'MongoDB, PostgreSQL, Redis', 'Socket.IO for Real-Time Apps', 'JWT Authentication, OAuth', 'CI/CD, PM2, Docker for Deployment'], details: '<strong>Fast & Scalable:</strong> Non-blocking architecture for real-time and high-traffic apps.<br><strong>Full-Stack Ready:</strong> Ideal for building APIs that integrate with modern frontends.<br><strong>Microservices Friendly:</strong> Efficient structure for modular and maintainable systems.<br>📩 Let’s build blazing-fast applications together using Node.js.' },
    { id: 'php', title: 'PHP', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we deliver dynamic and secure PHP-based web solutions tailored to your business needs. PHP remains a powerful option for building fast, cost-effective, and stable web applications with wide server compatibility.', description: 'From simple websites to enterprise applications, PHP powers thousands of successful online platforms worldwide.', img: detailPhp, techs: ['PHP 8+, MySQL', 'Laravel, CodeIgniter, Symfony', 'REST APIs & JSON Integration', 'Composer, PHPUnit, PHPStan', 'Blade Templating, Twig', 'Apache, NGINX, cPanel Hosting'], details: '<strong>Cost-Efficient:</strong> Rapid development with vast library support.<br><strong>Highly Customizable:</strong> Flexible architecture for unique project requirements.<br><strong>Broad Compatibility:</strong> Easily integrates with most hosting and server setups.<br>📩 Get in touch to develop secure and scalable PHP web solutions with our expert team.' },
    { id: 'asp.net', title: 'ASP.NET', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech builds secure, high-performance web and enterprise applications using ASP.NET. Backed by Microsoft, ASP.NET is perfect for developing robust, scalable applications for businesses of all sizes.', description: 'We create modern applications using ASP.NET MVC and ASP.NET Core for maximum flexibility, security, and speed.', img: detailAsp, techs: ['ASP.NET Core, .NET 6/7', 'C#, Razor Pages, Blazor', 'Entity Framework, LINQ', 'SQL Server, Azure SQL', 'Dependency Injection, Identity', 'Azure DevOps, IIS, Docker'], details: '<strong>Enterprise-Level Security:</strong> Built-in authentication, role management, and secure API practices.<br><strong>Cross-Platform Ready:</strong> ASP.NET Core runs on Windows, Linux, and macOS.<br><strong>Integration with Microsoft Stack:</strong> Seamless with Azure, MS SQL, and other enterprise tools.<br>📩 Let’s create your next powerful application with ASP.NET technology.' },
    { id: 'java', title: 'Java', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech builds stable, secure, and scalable applications using Java. Known for its portability and performance, Java is a top choice for enterprise-grade applications, financial systems, and backend services.', description: 'We use Java to build cross-platform, high-load applications tailored for long-term scalability and security.', img: detailJava, techs: ['Java 11+, Spring Boot, Hibernate', 'Maven, Gradle, Jenkins', 'REST & SOAP APIs', 'MySQL, Oracle, PostgreSQL', 'JUnit, Mockito, Selenium', 'Apache Tomcat, JBoss, Kubernetes'], details: '<strong>Enterprise-Ready:</strong> Ideal for large-scale, mission-critical systems.<br><strong>Scalable & Performant:</strong> Designed for handling complex logic and high user loads.<br><strong>Strong Ecosystem:</strong> Thousands of libraries and tools to enhance productivity.<br>📩 Work with our Java experts to build robust, scalable, and secure applications.' },
    { id: 'python', title: 'Python', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech utilizes Python to build clean, scalable, and efficient applications for web, automation, data processing, and AI. Python’s flexibility makes it a favorite for everything from startups to enterprise solutions.', description: 'Whether it\'s data-driven platforms or machine learning systems, we harness Python’s capabilities to solve real-world challenges.', img: detailPython, techs: ['Python 3.x, Django, Flask', 'Pandas, NumPy, Scikit-learn', 'Celery, Redis, RabbitMQ', 'FastAPI for modern APIs', 'PyTest, Unittest for Testing', 'AWS Lambda, Docker, Kubernetes'], details: '<strong>Rapid Development:</strong> Python’s simplicity enables quick MVPs and production-ready builds.<br><strong>Versatile:</strong> Ideal for web, data, automation, and machine learning applications.<br><strong>Clean & Maintainable:</strong> Readable codebase and strong testing ecosystem.<br>📩 Let our Python developers help turn your ideas into scalable solutions.' },
    { id: 'laravel', title: 'Laravel', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech builds elegant and robust web applications using Laravel, the leading PHP framework. Laravel offers a refined development experience with MVC architecture, powerful ORM, and a strong ecosystem.', description: 'From simple web portals to complex SaaS platforms, we use Laravel to build modern, secure, and maintainable apps.', img: detailLaravel, techs: ['Laravel 9+, PHP 8+', 'Eloquent ORM, Blade Templating', 'RESTful API Development', 'Laravel Sanctum & Passport', 'MySQL, Redis, PostgreSQL', 'Queue Systems, Horizon, Nova'], details: '<strong>Clean Architecture:</strong> MVC structure ensures organized and scalable code.<br><strong>Rich Ecosystem:</strong> Tools for authentication, caching, jobs, testing, and more.<br><strong>Fast Time-to-Market:</strong> Laravel\'s built-in features accelerate development.<br>📩 Let’s bring your web project to life with Laravel’s power and elegance.' }
];

const BackEndPage = () => {
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
            "name": "Technologies",
            "item": "https://www.onclickinfotech.com/technologies"
        }, {
            "@type": "ListItem",
            "position": 3,
            "name": "Back-End",
            "item": "https://www.onclickinfotech.com/technologies/back-end"
        }]
    };

    return (
        <div className="back-end-page">
            <SEO 
              title="Back-End Development Technologies | Node.js, Python & PHP"
              description="Discover our back-end development capabilities. We build robust, scalable server-side applications and APIs with technologies like Node.js, Python (Django, Flask), PHP (Laravel), and Java."
              url="/technologies/back-end"
              image={mainImg}
            />
            <StructuredData data={breadcrumbData} />

            <ServiceHero
                preTitle="Back End"
                title="Services for Scalable Business Growth"
                description="Our Back End services are designed to power secure, robust, and scalable applications. We specialize in server-side development with Node.js, Python (Django, Flask), Java, PHP, and .NET technologies. From API development, microservices architecture, authentication systems, to real-time data handling, we deliver reliable and optimized backend solutions."
                solutionsHeading="We Provide Smart Solutions With"
                badges={heroBadges}
                mainImage={mainImg}
            />
            
            <div className="between-section-down"></div>

            <FeatureShowcase
                title="Advanced Back-End Technologies"
                features={showcaseFeatures}
            />
            
            <CardGrid
                title="Our Tech Stack for Back-End Development"
                description="We build scalable, secure, and high-performance server-side applications using modern back-end technologies and best practices in architecture."
                cards={servicesCards}
            />

            <div className="between-section-up"></div>

            <div className="technology-list-container">
                {detailSections.map((section, index) => (
                    <ServiceDetail
                        key={section.id}
                        section={section}
                        imagePosition={index % 2 !== 0 ? 'left' : 'right'} 
                    />
                ))}
            </div>
        </div>
    );
};

export default BackEndPage;
import React from 'react';
import './WebDevelopmentPage.css';
import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';

// Import reusable components
import ServiceHero from '../../components/services/ServiceHero';
import FeatureShowcase from '../../components/services/FeatureShowcase';
import CardGrid from '../../components/services/CardGrid';
import ServiceDetail from '../../components/services/ServiceDetail';

// Asset Imports
import badge1 from '../../assets/services/web/1.png';
import badge2 from '../../assets/services/web/2.png';
import badge3 from '../../assets/services/web/3.png';
import badge4 from '../../assets/services/web/4.png';
import mainImg from '../../assets/services/web/main.jpg';

import problemSolvingImg from '../../assets/services/web/Problem-solving.png';
import attentionToDetailImg from '../../assets/services/web/Attention to detail.png';
import continuousLearningImg from '../../assets/services/web/Continuous learning.png';

import frontendImg from '../../assets/services/web/frontend Development.png';
import backendImg from '../../assets/services/web/backend Development.png';
import cmsImg from '../../assets/services/web/CMS Development.png';
import webAppImg from '../../assets/services/web/Web Application Development.png';
import maintenanceImg from '../../assets/services/web/Website Maintenance and Support.png';

const badges = [
    { src: badge1, alt: 'Badge 1' },
    { src: badge2, alt: 'Badge 2' },
    { src: badge3, alt: 'Badge 3' },
    { src: badge4, alt: 'Badge 4' },
];

const showcaseFeatures = [
    { key: 'PWA', title: 'Progressive Web Apps (PWA)', desc: 'Deliver an app-like experience directly in the browser. PWAs are fast, reliable, and engaging, with features like offline access and push notifications. We build PWAs that combine the best of web and mobile, increasing user retention and accessibility.' },
    { key: 'SPA', title: 'Single Page Applications (SPA)', desc: 'Create fluid, fast, and responsive user experiences with SPAs. Using frameworks like React, Angular, and Vue, we build applications that load a single HTML page and dynamically update content as the user interacts with it, eliminating page reloads and providing a seamless desktop-like feel.' },
    { key: 'Serverless', title: 'Serverless Architecture', desc: 'Reduce infrastructure overhead and scale effortlessly with serverless architecture. We leverage platforms like AWS Lambda and Google Cloud Functions to build backends that run code in response to events, so you only pay for the compute time you consume, without managing any servers.' },
    { key: 'API', title: 'API Development', desc: 'Connect your applications and services with robust, secure, and well-documented APIs. We specialize in building both RESTful and GraphQL APIs that serve as the backbone for your web and mobile applications, enabling seamless data exchange and integration.' },
    { key: 'Security', title: 'Security Best Practices', desc: 'Security is at the core of our development process. We implement best practices including SSL/HTTPS, secure authentication (OAuth 2.0, JWT), and protection against common vulnerabilities like XSS and CSRF to ensure your application and user data are always safe.' },
    { key: 'SEO', title: 'SEO Optimization', desc: 'Build websites that rank high on search engines. Our development process includes technical SEO best practices such as semantic HTML, structured data, mobile-first design, and fast load times to improve your visibility and drive organic traffic.' },
    { key: 'WCAG', title: 'Web Accessibility (WCAG Standards)', desc: 'We build inclusive digital experiences by adhering to Web Content Accessibility Guidelines (WCAG). Our websites are designed to be usable by everyone, including people with disabilities, ensuring equal access to information and functionality.' },
];

const softSkillsData = [
    { title: 'Problem-solving', desc: 'We deliver projects on schedule through effective prioritization and workflow optimization. Our agile methodologies ensure efficient use of time and resources.', img: problemSolvingImg },
    { title: 'Attention to detail', desc: 'We deliver projects on schedule through effective prioritization and workflow optimization. Our agile methodologies ensure efficient use of time and resources.', img: attentionToDetailImg },
    { title: 'Continuous learning', desc: 'Wrike supports marketing and creative teams as they create projects, campaigns, and assets of every kind — all from one place. Streamline requests and visualize results, plans, and workloads.', img: continuousLearningImg },
];

const techSectionsData = [
    { id: 'Frontend', title: 'Frontend Development', preTitle: 'OUR SERVICE', subtitle: 'At OnClick Infotech, we craft visually stunning and responsive user interfaces that deliver seamless digital experiences.', description: 'We blend creativity with code to bring dynamic, accessible, and engaging web frontends to life.', img: frontendImg, techs: ['HTML5, CSS3, JavaScript', 'React, Angular, Vue.js', 'Tailwind CSS, Bootstrap, SCSS', 'TypeScript & JSX', 'Webpack, Vite, Gulp', 'Cross-browser Testing & Optimization'], details: '<strong>Responsive Design:</strong> Ensuring your UI works flawlessly on all devices.<br><strong>Interactive Elements:</strong> Dynamic components that enhance user engagement.<br><strong>Optimized Performance:</strong> Speed, scalability, and accessibility baked in.<br>📩 Build beautiful frontends that delight users and drive engagement.' },
    { id: 'Backend', title: 'Backend Development', preTitle: 'OUR SERVICE', subtitle: 'OnClick Infotech provides robust backend development services that power your applications with security, scalability, and speed.', description: 'We create strong architectural foundations for your digital products and services.', img: backendImg, techs: ['Node.js, Express.js', 'PHP, Laravel, Symfony', 'Python, Django, Flask', 'ASP.NET, Java Spring Boot', 'RESTful APIs & GraphQL', 'Database Design & Integration'], details: '<strong>Secure APIs:</strong> Reliable, scalable APIs for web and mobile applications.<br><strong>Custom Logic:</strong> Tailored business logic to meet your goals.<br><strong>Performance Optimized:</strong> High-performing server-side architectures.<br>📩 Let us build your application\'s powerhouse with expert backend development.' },
    { id: 'CMS', title: 'CMS Development', preTitle: 'OUR SERVICE', subtitle: 'At OnClick Infotech, we specialize in building powerful, user-friendly CMS platforms that give you full control over your content.', description: 'Our CMS services empower businesses to manage digital content with ease and efficiency.', img: cmsImg, techs: ['WordPress, Drupal, Joomla', 'Magento, Shopify, Umbraco', 'Custom CMS Solutions', 'Theme & Plugin Development', 'Content Structuring & Workflows', 'SEO, Security & Maintenance'], details: '<strong>Easy Content Management:</strong> Empower your team with intuitive content tools.<br><strong>Fully Customizable:</strong> Build from scratch or enhance existing CMS platforms.<br><strong>Secure & Scalable:</strong> Ready to grow with your business.<br>📩 Let us build your ideal content management system for maximum efficiency.' },
    { id: 'Web-Application', title: 'Web Application Development', preTitle: 'OUR SERVICE', subtitle: 'OnClick Infotech develops high-performance, scalable web applications tailored to your unique business needs.', description: 'We build secure, scalable web applications using modern technologies and agile methodologies.', img: webAppImg, techs: ['Frontend: React, Angular, Vue', 'Backend: Node.js, Python, PHP, .NET', 'Databases: MongoDB, MySQL, PostgreSQL', 'Cloud Hosting: AWS, Azure, GCP', 'APIs: REST, GraphQL', 'Authentication, Security & DevOps'], details: '<strong>Custom-Built:</strong> Designed to fit your workflows and user needs.<br><strong>Fast & Scalable:</strong> Built to grow with your business.<br><strong>Cross-Platform Compatibility:</strong> Seamless performance on all modern browsers.<br>📩 Build intelligent, data-driven web apps with our expert team.' },
    { id: 'Website-Maintenance', title: 'Website Maintenance and Support', preTitle: 'OUR SERVICE', subtitle: 'OnClick Infotech offers ongoing website maintenance and support to keep your site secure, updated, and performing at its best.', description: 'Focus on your business while we keep your website running smoothly, safely, and efficiently.', img: maintenanceImg, techs: ['Regular Updates & Patches', 'Security Monitoring & Fixes', 'Performance Optimization', 'Backup & Recovery Services', 'Content Updates & Edits', '24/7 Technical Support'], details: '<strong>Stay Updated:</strong> Regular patches, plugin updates, and CMS maintenance.<br><strong>Maximize Uptime:</strong> Quick resolution of issues and continuous monitoring.<br><strong>Peace of Mind:</strong> Professional support whenever you need it.<br>📩 Ensure your website stays secure, updated, and optimized with our expert care.' }
];


const WebDevelopmentPage = () => {
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
            "name": "Services",
            "item": "https://www.onclickinfotech.com/services"
        }, {
            "@type": "ListItem",
            "position": 3,
            "name": "Web Development",
            "item": "https://www.onclickinfotech.com/services/web-development"
        }]
    };

    return (
        <div className="web-dev-page">
            <SEO 
                title="Web Development Services | Custom Web Apps & Websites"
                description="Onclick Infotech provides expert web development services. We build fast, secure, and scalable websites and web applications using modern technologies like React, Node.js, and more."
                url="/services/web-development"
                image={mainImg}
            />
            <StructuredData data={breadcrumbData} />

            <ServiceHero 
                preTitle="Web Development"
                title="Services for Web Development"
                description="We deliver complete Web Development solutions tailored to your business needs. Our expertise spans custom website development, web app design, e-commerce solutions, and responsive UI/UX. We work with modern technologies like HTML5, CSS3, JavaScript, React.js, Next.js, Angular, and Node.js to ensure your digital growth."
                solutionsHeading="We Provide Smart Solutions With"
                badges={badges}
                mainImage={mainImg}
            />

            <FeatureShowcase
                title="Core Web Technologies"
                features={showcaseFeatures}
            />

            <CardGrid
                title="Our Soft Skills for Web Development"
                description="Effective collaboration, problem-solving, and continuous learning are at the core of our web development process, ensuring we deliver not just code, but value."
                cards={softSkillsData}
            />

            <div className="technology-list-container">
                {techSectionsData.map((section, index) => (
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

export default WebDevelopmentPage;
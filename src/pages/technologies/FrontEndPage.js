import React from 'react';
import './FrontEndPage.css';

// Import reusable components
import ServiceHero from '../../components/services/ServiceHero';
import FeatureShowcase from '../../components/services/FeatureShowcase';
import CardGrid from '../../components/services/CardGrid';
import ServiceDetail from '../../components/services/ServiceDetail';

// --- ASSET IMPORTS ---
import mainImg from '../../assets/technology/front-end/main.jfif';
import badgeTailwind from '../../assets/technology/front-end/tailwind.png';
import badgeUxui from '../../assets/technology/front-end/UXUI.png';
import badgeWebpack from '../../assets/technology/front-end/webpack logo.png';
import badgeReact from '../../assets/technology/front-end/react.png';

import featureCss from '../../assets/technology/front-end/CSS 3.png';
import featureJs from '../../assets/technology/front-end/JavaScript (ES6+).png';
import featureTailwind from '../../assets/technology/front-end/Tailwind CSS.png';
import featureTs from '../../assets/technology/front-end/TypeScript tooling.png';
import featureWebpack from '../../assets/technology/front-end/Webpack.png';
import featureVite from '../../assets/technology/front-end/Vite.png';
import featureNext from '../../assets/technology/front-end/Next.js.png';

import cardCore from '../../assets/technology/front-end/core Technologies.png';
import cardFrameworks from '../../assets/technology/front-end/Frameworks & Libraries.png';
// import cardStyling from '../../assets/technology/front-end/Styling & UI Systems.png';
import cardBuild from '../../assets/technology/front-end/Build & Optimization.png';

import detailAngular from '../../assets/technology/front-end/Angular.png';
import detailReact from '../../assets/technology/front-end/React JS.png';
import detailVue from '../../assets/technology/front-end/Vue js.png';
import detailTs from '../../assets/technology/front-end/TypeScript.png';
import detailWpf from '../../assets/technology/front-end/Windows Presentation Foundation.png';
import detailHtml from '../../assets/technology/front-end/HTML 5.png';


const heroBadges = [
    { src: badgeTailwind, alt: 'Tailwind CSS' },
    { src: badgeUxui, alt: 'UI/UX Design' },
    { src: badgeWebpack, alt: 'Webpack' },
    { src: badgeReact, alt: 'React' },
];

const showcaseSidebarItems = [
    { key: 'CSS', title: 'CSS 3', desc: 'Styling – Flexbox, Grid, animations, responsive design' },
    { key: 'JavaScript', title: 'JavaScript (ES6+)', desc: 'Dynamic behavior – modern syntax, async/await, modules' },
    { key: 'Tailwind', title: 'Tailwind CSS', desc: 'Utility-first CSS framework for rapid UI development' },
    { key: 'TypeScript', title: 'TypeScript', desc: 'Typed superset of JavaScript – better tooling and error prevention' },
    { key: 'Webpack', title: 'Webpack', desc: 'Module bundler – compiles JS, CSS, and assets into deployable files' },
    { key: 'Vite', title: 'Vite', desc: 'Fast frontend build tool with instant dev server and HMR' },
    { key: 'Next', title: 'Next.js', desc: 'React framework for SSR, static sites, and fullstack apps' },
];

const showcaseImageMap = {
    CSS: featureCss, JavaScript: featureJs, Tailwind: featureTailwind, TypeScript: featureTs,
    Webpack: featureWebpack, Vite: featureVite, Next: featureNext
};

const servicesCards = [
    { title: 'Core Technologies', desc: 'We use HTML5, CSS3, and JavaScript (ES6+) as the foundation of all web interfaces, ensuring accessibility, responsiveness, and browser compatibility.', img: cardCore },
    { title: 'Frameworks & Libraries', desc: 'Our team specializes in React.js, Vue.js, and Next.js to create dynamic SPAs and SSR-enabled websites with seamless navigation and top-tier performance.', img: cardFrameworks },
    // { title: 'Styling & UI Systems', desc: 'We design with Tailwind CSS, SASS, and component libraries like Material UI and ShadCN to ensure clean, scalable, and modern front-end designs.', img: cardStyling },
    { title: 'Build & Optimization', desc: 'Tools like Vite, Webpack, Babel, and Lighthouse help us ensure lightning-fast loads, code splitting, and continuous optimization of front-end assets.', img: cardBuild }
];

const detailSections = [
    { id: 'angular', title: 'Angular', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech delivers powerful and scalable web applications using Angular. Our team uses Angular’s component-based architecture and rich ecosystem to build high-performance apps with dynamic UIs and seamless user experiences.', description: 'We develop enterprise-grade Angular applications that are fast, maintainable, and built to scale with your business.', img: detailAngular, techs: ['Angular 2+', 'TypeScript, RxJS, NgRx', 'Angular CLI, Webpack', 'REST & GraphQL APIs Integration', 'Jasmine, Karma, Protractor for Testing', 'Material UI, Bootstrap, Tailwind CSS'], details: '<strong>Modular Architecture:</strong> Build robust apps with clean, maintainable codebases.<br><strong>Two-Way Data Binding:</strong> Real-time UI updates for smooth user interaction.<br><strong>Enterprise-Ready:</strong> Perfect for large-scale, complex business applications.<br>📩 Contact our Angular team to develop a secure and scalable web solution for your business.' },
    { id: 'react-js', title: 'React JS', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we craft interactive and high-performance web applications using React JS. Our developers harness the power of reusable components and a virtual DOM to deliver seamless, lightning-fast user interfaces.', description: 'React helps us build modern, responsive apps that scale smoothly and provide engaging experiences across all devices.', img: detailReact, techs: ['React JS, Next.js', 'Redux, Context API, Zustand', 'TypeScript & JavaScript ES6+', 'REST APIs, GraphQL, Axios', 'Testing: Jest, React Testing Library', 'Styled Components, Tailwind, Material UI'], details: '<strong>Component-Based Design:</strong> Reusable and maintainable UI elements.<br><strong>Fast Rendering:</strong> Virtual DOM ensures smooth performance and fast updates.<br><strong>SEO-Friendly:</strong> With Next.js, enhance visibility and ranking in search engines.<br>📩 Partner with our React team to build responsive and feature-rich web apps.' },
    { id: 'vue', title: 'Vue js', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech builds lightweight, flexible, and fast web applications with Vue.js. This progressive JavaScript framework enables us to deliver high-quality UIs with minimal overhead and a smooth learning curve for easy maintenance.', description: 'Vue is ideal for both small projects and full-featured single-page applications (SPAs).', img: detailVue, techs: ['Vue 3, Vue CLI, Nuxt.js', 'Vuex for State Management', 'Composition API, Pinia', 'REST & GraphQL Integration', 'Jest, Cypress for Testing', 'Vuetify, BootstrapVue, Tailwind'], details: '<strong>Progressive Framework:</strong> Start small and scale with your application’s growth.<br><strong>Lightweight & Fast:</strong> Deliver fast load times and smooth interactivity.<br><strong>Developer-Friendly:</strong> Clean syntax and excellent tooling for faster development.<br>📩 Reach out to us to build high-performing Vue.js applications tailored to your needs.' },
    { id: 'typescript', title: 'TypeScript', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech leverages TypeScript to build large-scale, robust applications with confidence. TypeScript’s static typing and advanced tooling help us write clean, maintainable, and error-free code for both front-end and back-end systems.', description: 'We integrate TypeScript into modern development workflows to enhance reliability and developer productivity.', img: detailTs, techs: ['TypeScript with Angular, React, Vue', 'Node.js + TypeScript for Backend', 'TSLint, ESLint, Prettier for Code Quality', 'TypeORM, Prisma', 'Webpack, Vite, Babel Integration', 'Advanced Typing, Generics, Interfaces'], details: '<strong>Type Safety:</strong> Catch errors early and maintain code stability.<br><strong>Scalable Codebase:</strong> Ideal for large, complex applications.<br><strong>Improved Developer Experience:</strong> Better IDE support and intelligent autocompletion.<br>📩 Let our TypeScript experts build scalable and safe applications with modern best practices.' },
    { id: 'wpf', title: 'Windows Presentation Foundation', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech provides robust Windows desktop applications using WPF (Windows Presentation Foundation). We deliver feature-rich solutions with rich UI, seamless data binding, and powerful graphical interfaces for enterprise-level software.', description: 'Our WPF apps combine functionality and aesthetics, perfect for high-performance business tools and desktop environments.', img: detailWpf, techs: ['.NET, C#, WPF', 'XAML for UI Design', 'MVVM Pattern', 'Entity Framework for Data Access', 'Windows APIs Integration', 'Visual Studio, Blend for Visual Studio'], details: '<strong>Enterprise-Grade UI:</strong> Create elegant and powerful desktop user interfaces.<br><strong>MVVM Architecture:</strong> Maintainable and testable codebases.<br><strong>Rich Multimedia Support:</strong> Build data-rich, interactive applications.<br>📩 Get in touch to develop reliable and visually compelling desktop applications with WPF.' },
    { id: 'html-5', title: 'HTML 5', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech builds fast and responsive websites and applications using modern HTML5 standards. We ensure that our solutions are mobile-friendly, cross-browser compatible, and optimized for performance.', description: 'HTML5 helps us deliver lightweight, accessible, and interactive interfaces that work flawlessly across all devices.', img: detailHtml, techs: ['HTML5, CSS3, JavaScript', 'Responsive Design with Flexbox & Grid', 'Canvas, SVG for Graphics & Animations', 'Web Storage & Offline Support', 'SEO Optimization & Semantic Markup', 'Accessibility & WCAG Compliance'], details: '<strong>Cross-Platform Compatibility:</strong> Create web apps that work on any browser or device.<br><strong>Modern Features:</strong> Enhanced multimedia, offline access, and improved semantics.<br><strong>Lightweight & Fast:</strong> Clean code and optimized loading times.<br>📩 Reach out to us for responsive and modern HTML5 applications tailored to your business.' }
];

const FrontEndPage = () => {
    return (
        <div className="front-end-page">
            <ServiceHero
                preTitle="Front End"
                title="Services for Scalable Business Growth"
                description="We provide cutting-edge Front End development services using modern frameworks like React.js, Angular, and Vue.js. Our team creates pixel-perfect, responsive, and user-friendly interfaces optimized for performance and SEO. With a focus on clean code, intuitive design, and enhanced user experience, we bring your digital vision to life."
                solutionsHeading="We Provide Smart Solutions With"
                badges={heroBadges}
                mainImage={mainImg}
            />
            
            <div className="between-section-down"></div>

            <FeatureShowcase
                sidebarItems={showcaseSidebarItems}
                imageMap={showcaseImageMap}
            />
            
            <CardGrid
                title="Our Tech Stack for Front-End Development"
                description="We build fast, interactive, and responsive user interfaces using modern JavaScript frameworks, advanced styling systems, and performance-first tools."
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

export default FrontEndPage;
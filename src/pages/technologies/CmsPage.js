import React from 'react';
import './CmsPage.css';

// Import reusable components
import ServiceHero from '../../components/services/ServiceHero';
import FeatureShowcase from '../../components/services/FeatureShowcase';
import CardGrid from '../../components/services/CardGrid';
import ServiceDetail from '../../components/services/ServiceDetail';

// --- ASSET IMPORTS ---
import mainImg from '../../assets/technology/cms/main.webp';
import badgeWebflow from '../../assets/technology/cms/webflow.png';
import badgeNorth from '../../assets/technology/cms/north flank.png';
import badgeStainly from '../../assets/technology/cms/stainly.png';
import badgeRedux from '../../assets/technology/cms/redux.png';

import featureMagento from '../../assets/technology/cms/Adobe Commerce.png';
import featureGhost from '../../assets/technology/cms/Ghost.png';
import featureContentful from '../../assets/technology/cms/Contentful.png';
import featureSanity from '../../assets/technology/cms/Sanity.io.png';
import featureWebflow from '../../assets/technology/cms/Webflow CMS.png';
import featureButter from '../../assets/technology/cms/ButterCMS.png';
import featureKeystone from '../../assets/technology/cms/KeystoneJS.png';

import cardWordpress from '../../assets/technology/cms/wordpress CMS.png';
// import cardHeadless from '../../assets/technology/cms/Headless CMS.jfif';
import cardEnterprise from '../../assets/technology/cms/Enterprise CMS.png';
import cardCustom from '../../assets/technology/cms/CMS Customization.png';

import detailMagento from '../../assets/technology/cms/Magento.png';
import detailWordpress from '../../assets/technology/cms/WordPress.png';
import detailShopify from '../../assets/technology/cms/Shopify.png';
import detailUmbraco from '../../assets/technology/cms/Umbraco.png';
import detailDrupal from '../../assets/technology/cms/Drupal.png';
import detailJoomla from '../../assets/technology/cms/Joomla.png';

const heroBadges = [
    { src: badgeWebflow, alt: 'Webflow' },
    { src: badgeNorth, alt: 'Northflank' },
    { src: badgeStainly, alt: 'Stainly' },
    { src: badgeRedux, alt: 'Redux' },
];

const showcaseSidebarItems = [
    { key: 'Magento', title: 'Adobe Commerce', desc: 'Robust open-source eCommerce platform with advanced features' },
    { key: 'Ghost', title: 'Ghost', desc: 'Modern CMS focused on publishing and blogging, built on Node.js' },
    { key: 'Contentful', title: 'Contentful', desc: 'Cloud-based headless CMS for managing structured content via APIs' },
    { key: 'Sanity', title: 'Sanity.io', desc: 'Real-time headless CMS with structured content and flexible APIs' },
    { key: 'Webflow', title: 'Webflow CMS', desc: 'Visual development platform with a built-in CMS' },
    { key: 'ButterCMS', title: 'ButterCMS', desc: 'Headless CMS with quick setup and robust API for easy integration' },
    { key: 'Keystone', title: 'KeystoneJS', desc: 'Open-source headless CMS powered by Node.js and GraphQL' },
];

const showcaseImageMap = {
    Magento: featureMagento, Ghost: featureGhost, Contentful: featureContentful, Sanity: featureSanity,
    Webflow: featureWebflow, ButterCMS: featureButter, Keystone: featureKeystone
};

const servicesCards = [
    { title: 'WordPress', desc: 'The world\'s most popular CMS, ideal for websites, blogs, and e-commerce. We offer custom themes, plugins, and performance optimization tailored to your business goals.', img: cardWordpress },
    // { title: 'Headless CMS', desc: 'With solutions like Strapi, Sanity, and Contentful, we provide API-first content architecture—perfect for multi-platform delivery, scalability, and frontend freedom.', img: cardHeadless },
    { title: 'Enterprise CMS', desc: 'We implement and customize robust platforms like Drupal and Adobe Experience Manager (AEM) to handle large-scale digital ecosystems with advanced permissions and workflows.', img: cardEnterprise },
    { title: 'CMS Customization', desc: 'We tailor CMS features, integrate third-party tools, and enhance user interfaces to ensure your platform is aligned with both your brand and your operational needs.', img: cardCustom }
];

const detailSections = [
    { id: 'magento', title: 'Magento Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we deliver custom Magento eCommerce solutions that combine performance, scalability, and flexibility. Magento is a robust platform ideal for growing online stores with advanced functionality and deep customization.', description: 'We help businesses build high-performing online stores that drive sales and deliver seamless customer experiences.', img: detailMagento, techs: ['Magento Open Source & Adobe Commerce', 'Custom Module & Theme Development', 'Magento APIs & Third-Party Integrations', 'Payment Gateway Integration', 'Magento PWA Studio', 'Performance Optimization & SEO'], details: '<strong>Highly Scalable:</strong> Suitable for complex and growing online businesses.<br><strong>Custom Features:</strong> Tailored modules and integrations for your unique needs.<br><strong>Secure & Reliable:</strong> Enterprise-grade eCommerce performance.<br>📩 Build a powerful eCommerce store with Magento tailored to your business goals.' },
    { id: 'wordpress', title: 'WordPress Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech offers expert WordPress development services, from custom themes to plugin development. WordPress powers over 40% of the web and is perfect for content-focused websites and eCommerce solutions alike.', description: 'We create fast, SEO-friendly, and fully responsive WordPress websites that are easy to manage and scale.', img: detailWordpress, techs: ['Custom WordPress Themes & Plugins', 'WooCommerce Integration', 'Elementor, Gutenberg, WPBakery Builders', 'Multilingual Support & WPML', 'Speed Optimization & SEO', 'Security Hardening & Backup Solutions'], details: '<strong>Easy Content Management:</strong> Intuitive admin panel for effortless content updates.<br><strong>Flexible & Extensible:</strong> Wide range of plugins and customizations.<br><strong>Optimized for SEO:</strong> Built-in and advanced tools for search visibility.<br>📩 Get your custom WordPress site built to deliver performance and engagement.' },
    { id: 'shopify', title: 'Shopify Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we develop visually appealing, conversion-driven Shopify stores that offer seamless shopping experiences. Shopify is a powerful hosted platform perfect for fast and scalable eCommerce.', description: 'From custom theme design to app integrations, we help brands maximize the potential of Shopify.', img: detailShopify, techs: ['Shopify Theme Development & Customization', 'Shopify Liquid Templating', 'Shopify Apps & Custom Features', 'Product & Inventory Management', 'Shopify Plus & Headless Shopify', 'Payment Gateway & API Integrations'], details: '<strong>Quick Setup:</strong> Launch your store rapidly with hosted infrastructure.<br><strong>Secure & Reliable:</strong> PCI-compliant and secure by design.<br><strong>Customizable:</strong> Tailored solutions for unique business needs.<br>📩 Let’s build a conversion-optimized Shopify store for your brand.' },
    { id: 'umbraco', title: 'Umbraco Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech builds powerful and secure websites using Umbraco CMS—an open-source, ASP.NET-based platform known for its flexibility and user-friendly editing experience.', description: 'We deliver Umbraco-based web solutions tailored to your content and performance needs.', img: detailUmbraco, techs: ['Umbraco CMS Development & Integration', '.NET Core & MVC Architecture', 'Custom Templates & Content Structures', 'Multilingual & Multisite Support', 'Umbraco Cloud & Deployment', 'Security & Performance Tuning'], details: '<strong>Custom .NET CMS:</strong> Ideal for enterprises and businesses needing flexibility.<br><strong>Great Editor Experience:</strong> Intuitive UI for managing complex content.<br><strong>Scalable Architecture:</strong> Build performance-oriented, secure platforms.<br>📩 Unlock the power of enterprise-grade CMS with Umbraco.' },
    { id: 'drupal', title: 'Drupal Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we build secure, scalable, and feature-rich websites using Drupal—a powerful open-source CMS ideal for complex content and enterprise applications.', description: 'Whether you need a government portal, higher-ed website, or corporate intranet, Drupal is the perfect platform.', img: detailDrupal, techs: ['Drupal 9/10 Custom Theme & Module Development', 'Views, Taxonomy, Custom Entities', 'RESTful & JSON:API Integration', 'Multilingual & Multi-Site Architecture', 'Drupal Commerce & Custom Workflows', 'Security, Caching, and Performance'], details: '<strong>Enterprise-Ready:</strong> Designed for scalability, security, and complexity.<br><strong>Flexible Content Modeling:</strong> Build custom content types and workflows.<br><strong>Open Source Community:</strong> Benefit from rich modules and strong support.<br>📩 Partner with us to build your next Drupal-powered digital solution.' },
    { id: 'joomla', title: 'Joomla Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech builds dynamic, secure, and highly functional websites using Joomla—a powerful CMS with strong content management capabilities and extensive plugin support.', description: 'Our Joomla solutions are ideal for businesses, communities, and government organizations needing structured, user-friendly sites.', img: detailJoomla, techs: ['Custom Joomla Templates & Components', 'Module Development & Integration', 'Multilingual Support & Access Control', 'eCommerce Integration (HikaShop, VirtueMart)', 'Joomla Security & Performance Optimization', 'Migration from Other CMS Platforms'], details: '<strong>Advanced CMS Features:</strong> Rich content management and user access controls.<br><strong>Community-Driven:</strong> Robust ecosystem with plugins and themes.<br><strong>Secure & Extensible:</strong> Great for government, enterprise, and community portals.<br>📩 Let’s build your ideal Joomla website with performance and control in mind.' }
];

const CmsPage = () => {
    return (
        <div className="cms-page">
            <ServiceHero
                preTitle="Content Management System"
                title="Services for Scalable Business Growth"
                description="Our CMS services deliver powerful, flexible, and easy-to-manage website and application solutions. We specialize in popular platforms like WordPress, Drupal, Joomla, and headless CMS systems like Strapi and Contentful. From custom theme development and plugin integration to enterprise-level CMS solutions, we create systems that are scalable, SEO-optimized, and secure."
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
                title="Smart Content Management Systems"
                description="From simple blogs to enterprise-level platforms, our CMS solutions are built to be flexible, scalable, and easy to manage—empowering businesses to create, update, and optimize content effortlessly."
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

export default CmsPage;
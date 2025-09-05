import React from 'react';
import './DigitalMarketingPage.css';

// Import reusable components
import ServiceHero from '../../components/services/ServiceHero';
import FeatureShowcase from '../../components/services/FeatureShowcase';
import CardGrid from '../../components/services/CardGrid';
import ServiceDetail from '../../components/services/ServiceDetail';

// --- ASSET IMPORTS ---
// Hero and Badges
import mainImg from '../../assets/services/digital-marketing/main.jpg';
import badge1 from '../../assets/services/digital-marketing/1.png';
import badge3 from '../../assets/services/digital-marketing/3.png';
import badge4 from '../../assets/services/digital-marketing/4.png';

// Feature Showcase
import semImg from '../../assets/services/digital-marketing/Search Engine Marketing.png';
import analyticsImg from '../../assets/services/digital-marketing/Analytics & Reporting.png';
import ormImg from '../../assets/services/digital-marketing/Online Reputation Management.png';
import affiliateImg from '../../assets/services/digital-marketing/Affiliate Marketing.png';
import mobileImg from '../../assets/services/digital-marketing/Mobile Marketing.png';
import conversionImg from '../../assets/services/digital-marketing/Conversion Rate Optimization.png';

// Card Grid
import roiImg from '../../assets/services/digital-marketing/ROI-focused strategies.png';
import creativeImg from '../../assets/services/digital-marketing/In-house creative & analytics.png';
import customizedImg from '../../assets/services/digital-marketing/Customized plans for every business.png';

// Service Details
import seoImg from '../../assets/services/digital-marketing/SEO (Search Engine Optimization).png';
import ppcImg from '../../assets/services/digital-marketing/PPC (Pay-Per-Click Advertising).png';
import contentImg from '../../assets/services/digital-marketing/Content Marketing.png';
import emailImg from '../../assets/services/digital-marketing/Email Marketing Campaigns.png';
import smmImg from '../../assets/services/digital-marketing/Social Media Marketing.png';

const heroBadges = [
    { src: badge1, alt: 'Badge 1' },
    { src: badge3, alt: 'Badge 3' },
    { src: badge4, alt: 'Badge 4' },
];

const showcaseSidebarItems = [
    { key: 'SEM', title: 'Search Engine Marketing (SEM)', desc: 'Drive traffic with paid ads on search engines (Google Ads, Bing Ads)' },
    { key: 'Analytics', title: 'Analytics & Reporting', desc: 'Track performance and gain insights with tools like Google Analytics & Search Console' },
    { key: 'ORM', title: 'Online Reputation Management (ORM)', desc: 'Monitor and enhance your online presence and customer perception' },
    { key: 'Affiliate', title: 'Affiliate Marketing', desc: 'Drive traffic and sales through partner referrals and commission-based campaigns' },
    { key: 'Mobile', title: 'Mobile Marketing', desc: 'Reach users on their smartphones with SMS campaigns, mobile apps, and in-app ads' },
    { key: 'Conversion', title: 'Conversion Rate Optimization (CRO)', desc: 'Improve website performance and turn visitors into customers using data-driven techniques' },
];

const showcaseImageMap = {
    SEM: semImg, Analytics: analyticsImg, ORM: ormImg,
    Affiliate: affiliateImg, Mobile: mobileImg, Conversion: conversionImg
};

const servicesCards = [
    { title: 'ROI-focused strategies', desc: 'Our ROI-focused strategies are designed to maximize business value by aligning every project with clear, measurable outcomes. Through smart resource allocation, data-driven planning, and agile execution, we ensure every initiative delivers strong returns and sustainable growth.', img: roiImg },
    { title: 'In-house creative & analytics team', desc: 'Our in-house creative and analytics team blends innovative design with data-driven insights to craft compelling digital experiences. By tracking user behavior and campaign performance, we continuously optimize creative strategies to ensure measurable impact and maximize ROI.', img: creativeImg },
    { title: 'Customized plans for every business', desc: 'We create customized plans tailored to each business\'s unique goals, challenges, and growth stage. By understanding your specific needs, we design scalable, results-driven solutions that deliver real value and long-term success.', img: customizedImg }
];

const detailSections = [
    { id: 'seo-search-engine-optimization', title: 'SEO (Search Engine Optimization)', preTitle: 'OUR SERVICE', subtitle: 'At OnClick Infotech, we offer comprehensive SEO services that help businesses increase visibility, drive organic traffic, and improve search engine rankings.', description: 'Our tailored SEO strategies are designed to bring more potential customers to your website by enhancing search engine visibility and ranking.', img: seoImg, techs: ['Keyword Research & Analysis', 'On-page Optimization', 'Off-page Optimization', 'SEO Tools: Google Analytics, SEMrush, Ahrefs, Moz', 'Local SEO Optimization', 'SEO Audits & Reporting'], details: '<strong>Increase Organic Traffic:</strong> Enhance your website’s visibility and attract relevant visitors.<br><strong>Improve Search Rankings:</strong> Rank higher on Google and other search engines to stay competitive.<br><strong>Continuous Optimization:</strong> Regular updates and tweaks to ensure long-term SEO success.<br>📩 Contact our SEO experts to improve your website’s ranking and drive organic traffic.' },
    { id: 'ppc-pay-per-click-advertising', title: 'PPC (Pay-Per-Click Advertising)', preTitle: 'OUR SERVICE', subtitle: 'OnClick Infotech offers result-driven PPC advertising services, helping businesses reach their target audience through effective paid search campaigns.', description: 'We deliver high-converting PPC ads on platforms like Google Ads, Bing Ads, and more, ensuring every dollar spent yields maximum returns.', img: ppcImg, techs: ['Google Ads, Bing Ads, Facebook Ads, LinkedIn Ads', 'Keyword Research & Ad Group Structuring', 'Landing Page Optimization', 'Bid Management & Budget Allocation', 'Conversion Tracking & Analytics', 'A/B Testing & Performance Analysis'], details: '<strong>Targeted Advertising:</strong> Reach your exact target audience based on interests, demographics, and location.<br><strong>Maximized ROI:</strong> Optimize campaigns to ensure that every dollar spent results in measurable outcomes.<br><strong>Continuous Optimization:</strong> Regular tweaking and testing of ads to improve click-through and conversion rates.<br>📩 Get in touch with our PPC experts to create campaigns that deliver results and grow your business.' },
    { id: 'content-marketing', title: 'Content Marketing', preTitle: 'OUR SERVICE', subtitle: 'At OnClick Infotech, we create and distribute high-quality content to help businesses engage, inform, and convert their audience.', description: 'From blog posts to video content and infographics, we create impactful content that enhances your brand’s online presence.', img: contentImg, techs: ['Content Strategy & Planning', 'SEO Optimized Blog Writing', 'Video Content Production', 'Infographics & Visual Content', 'Social Media Content Management', 'Content Performance Analysis & Reporting'], details: '<strong>Engaging Content:</strong> Craft compelling blog posts, videos, and visuals that resonate with your target audience.<br><strong>Brand Awareness:</strong> Increase visibility and establish your brand as an authority in your industry.<br><strong>Customer Conversion:</strong> Use strategic content to convert visitors into loyal customers.<br>📩 Reach out to our content experts to create content that boosts engagement and drives results.' },
    { id: 'email-marketing-campaigns', title: 'Email Marketing Campaigns', preTitle: 'OUR SERVICE', subtitle: 'OnClick Infotech helps businesses engage customers through personalized email marketing campaigns.', description: 'Our email campaigns deliver personalized messages that convert prospects into customers and keep your audience informed.', img: emailImg, techs: ['Email Marketing Platforms: Mailchimp, HubSpot', 'Personalized Email Campaigns', 'Email Automation & Drip Campaigns', 'A/B Testing & Analytics', 'Segmentation & List Management', 'Responsive Email Design'], details: '<strong>Personalized Outreach:</strong> Tailored emails that speak directly to your audience’s needs.<br><strong>Automated Campaigns:</strong> Engage leads and customers with drip campaigns and automated follow-ups.<br><strong>Performance Tracking:</strong> Measure open rates, click-through rates, and conversions to optimize your strategy.<br>📩 Contact our email marketing experts to create campaigns that increase engagement and boost conversions.' },
    { id: 'social-media-marketing-smm', title: 'Social Media Marketing (SMM)', preTitle: 'OUR SERVICE', subtitle: 'OnClick Infotech helps businesses harness the power of social media to build a loyal community, engage with customers, and drive sales.', description: 'We manage and optimize your social media channels to create brand awareness, drive traffic, and build relationships with your audience.', img: smmImg, techs: ['Social Media Platforms: Facebook, Instagram, Twitter, LinkedIn', 'Social Media Ads Management', 'Content Creation & Scheduling', 'Community Management & Engagement', 'Analytics & Reporting', 'Influencer Marketing & Partnerships'], details: '<strong>Brand Building:</strong> Establish and grow your brand’s presence on social media platforms.<br><strong>Audience Engagement:</strong> Connect with your community through engaging content and interactions.<br><strong>Paid Campaigns:</strong> Run targeted ads to reach your ideal audience and drive results.<br>📩 Reach out to our social media marketing experts to grow your brand and connect with your audience.' },
];

const DigitalMarketingPage = () => {
    return (
        <div className="digital-marketing-page">
            <ServiceHero
                preTitle="Digital Marketing"
                title="Services for Digital Marketing"
                description="The process of promoting brands, products, and services to targeted audiences online. It involves search engine optimization (SEO), social media marketing, content creation, paid advertising, and data-driven analytics—all essential for driving traffic, engagement, and revenue. we provide expert digital marketing services that help you optimize your online presence, improve campaign performance, and ensure scalable growth."
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
                title="Why Choose Us?"
                description="At OnClick Infotech, we deliver tailored digital marketing solutions that drive traffic, boost engagement, and increase ROI. With a focus on results, creativity, and data, we help your brand grow online efficiently and effectively."
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

export default DigitalMarketingPage;
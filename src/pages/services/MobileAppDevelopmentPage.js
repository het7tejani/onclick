import React from 'react';
import './MobileAppDevelopmentPage.css';

// Import reusable components
import ServiceHero from '../../components/services/ServiceHero';
import FeatureShowcase from '../../components/services/FeatureShowcase';
import CardGrid from '../../components/services/CardGrid';
import ServiceDetail from '../../components/services/ServiceDetail';

// --- ASSET IMPORTS ---
// Hero and Badges
import mainImg from '../../assets/services/mobile-app/main.jpg';
import badgePush from '../../assets/services/mobile-app/Push Notifications.png';
import badgeChatbot from '../../assets/services/mobile-app/Chatbot.png';
import badgeVR from '../../assets/services/mobile-app/Virtual Reality.png';
import badgeGeo from '../../assets/services/mobile-app/Geolocation.png';

// Feature Showcase
import vrImg from '../../assets/services/mobile-app/Virtual Reality (VR).png';
import blockchainImg from '../../assets/services/mobile-app/Blockchain App Development.png';
import beaconImg from '../../assets/services/mobile-app/Beacon Technology Integration.png';
import chatbotImg from '../../assets/services/mobile-app/Chatbot App Development.png';
import aiImg from '../../assets/services/mobile-app/AI & Machine Learning Mobile Apps.png';
import geolocationImg from '../../assets/services/mobile-app/Geolocation-Based App Development.png';
import pushImg from '../../assets/services/mobile-app/Push Notifications Integration.png';

// Card Grid
import uiuxImg from '../../assets/services/mobile-app/UIUX Design.png';
// import apiImg from '../../assets/services/mobile-app/API Integration.png';
import wearableImg from '../../assets/services/mobile-app/Wearable App Development.png';
import testingImg from '../../assets/services/mobile-app/Mobile App Testing.png';

// Service Details
import androidImg from '../../assets/services/mobile-app/Android App Development.png';
import iosImg from '../../assets/services/mobile-app/iOS App Developmen.png';
import crossPlatformImg from '../../assets/services/mobile-app/Cross-platform App Development.png';
import appUiUxImg from '../../assets/services/mobile-app/App UIUX Design.png';
import qaImg from '../../assets/services/mobile-app/App Testing and Quality Assurance.png';


const heroBadges = [
    { src: badgePush, alt: 'Push Notifications' },
    { src: badgeChatbot, alt: 'Chatbot' },
    { src: badgeVR, alt: 'Virtual Reality' },
    { src: badgeGeo, alt: 'Geolocation' },
];

const showcaseSidebarItems = [
    { key: 'VRApp', title: 'Virtual Reality (VR)', desc: 'Building interactive VR apps that provide fully immersive virtual environments' },
    { key: 'BlockchainApp', title: 'Blockchain App Development', desc: 'Developing decentralized apps (dApps) for secure and transparent transactions' },
    { key: 'BeaconTech', title: 'Beacon Technology Integration', desc: 'Leveraging Bluetooth Low Energy (BLE) beacons for location-based services and notifications' },
    { key: 'Chatbots', title: 'Chatbot App Development', desc: 'Integrating AI-powered chatbots into mobile apps for enhanced user engagement and support' },
    { key: 'AIApp', title: 'AI & Machine Learning Mobile Apps', desc: 'Building intelligent apps that leverage machine learning models for personalized experiences' },
    { key: 'Geolocation', title: 'Geolocation-Based App Development', desc: 'Creating apps with real-time location tracking, geofencing, and map integrations' },
    { key: 'PushNotifications', title: 'Push Notifications Integration', desc: 'Implementing real-time push notifications to keep users engaged and informed' },
];

const showcaseImageMap = {
    VRApp: vrImg, BlockchainApp: blockchainImg, BeaconTech: beaconImg,
    Chatbots: chatbotImg, AIApp: aiImg, Geolocation: geolocationImg,
    PushNotifications: pushImg
};

const servicesCards = [
    { title: 'UI/UX Design', desc: 'We prioritize intuitive user journeys and modern aesthetics. Our mobile UI/UX experts ensure that your app is not only functional but also visually appealing and easy to navigate.', img: uiuxImg },
    // { title: 'API Integration', desc: 'From third-party services to in-house APIs, we enable your app to communicate securely and efficiently with external systems to unlock more functionality and real-time features.', img: apiImg },
    { title: 'Wearable App Development', desc: 'Extend your app experience to smartwatches and fitness trackers. We create apps tailored for wearables that deliver real-time data, notifications, and seamless connectivity.', img: wearableImg },
    { title: 'Mobile App Testing', desc: 'We conduct rigorous manual and automated testing to ensure your app works perfectly across devices and OS versions. From usability to security, we’ve got QA covered.', img: testingImg }
];

const detailSections = [
    { id: 'android-app-development', title: 'Android App Development', preTitle: 'OUR SERVICE', subtitle: 'At OnClick Infotech, we specialize in developing high-performance Android apps that deliver a seamless user experience.', description: 'From concept to launch, we provide end-to-end Android app development services, ensuring your app is functional, scalable, and optimized for the best performance on Android devices.', img: androidImg, techs: ['Java, Kotlin for Android Development', 'Android SDK & Android Studio', 'Google APIs & Firebase Integration', 'SQLite, Room Database for Local Storage', 'Third-party Libraries and APIs Integration', 'App Performance Optimization'], details: '<strong>Custom Solutions:</strong> Tailored Android apps that align with your unique business requirements.<br><strong>Seamless User Experience:</strong> Focus on intuitive design and smooth performance for Android users.<br><strong>Scalable Apps:</strong> Build apps that grow with your business and user base.<br>📩 Get in touch with our Android app development experts to bring your app idea to life.' },
    { id: 'ios-app-development', title: 'iOS App Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech offers premium iOS app development services that create sleek, high-performance apps for iPhones and iPads.', description: 'Our iOS development team ensures that your app is fast, reliable, and built to meet the standards of the Apple App Store, with a focus on intuitive interfaces and seamless integration with Apple’s ecosystem.', img: iosImg, techs: ['Swift & Objective-C for iOS Development', 'Xcode & Cocoa Touch Framework', 'Core Data & SQLite for Database Management', 'Firebase & iCloud Integration', 'Push Notifications & In-App Purchases', 'App Performance & Memory Optimization'], details: '<strong>High-Quality iOS Apps:</strong> Crafting apps with high performance, security, and great user experience.<br><strong>App Store Optimization:</strong> Ensure your app is designed for easy approval and visibility on the App Store.<br><strong>Seamless Apple Integration:</strong> We integrate your app seamlessly with iOS services like Apple Pay, iCloud, and more.<br>📩 Contact our iOS app development experts to turn your app idea into a successful iOS product.' },
    { id: 'cross-platform-app-development', title: 'Cross-platform App Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we specialize in developing cross-platform apps that work flawlessly across Android and iOS.', description: 'We ensure your cross-platform app delivers high performance and a consistent user experience on both Android and iOS devices, reducing development time and costs.', img: crossPlatformImg, techs: ['Flutter, React Native, Xamarin', 'Dart, JavaScript for Cross-Platform Development', 'Native Modules for Platform-Specific Features', 'Firebase & API Integration', 'App Performance Optimization', 'App Testing & Debugging Tools'], details: '<strong>Unified Codebase:</strong> Write once, deploy on both iOS and Android platforms.<br><strong>Faster Time-to-Market:</strong> Speed up the development process and reduce time-to-market with cross-platform frameworks.<br><strong>High Performance:</strong> Create native-like experiences across platforms with optimized performance.<br>📩 Reach out to our experts to build your cross-platform app that provides a seamless experience on all devices.' },
    { id: 'app-ui/ux-design', title: 'App UI/UX Design', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech provides innovative UI/UX design services that ensure your app is visually appealing, intuitive, and user-friendly.', description: 'Our design team crafts beautiful, responsive, and interactive designs that improve usability and create a delightful experience for your users.', img: appUiUxImg, techs: ['Figma, Sketch, Adobe XD for Design', 'Wireframing & Prototyping', 'UI/UX Design Principles', 'User Journey Mapping & Persona Creation', 'Responsive & Adaptive Design Techniques', 'User Testing & Feedback Integration'], details: '<strong>User-Centric Design:</strong> Design that puts user needs and ease-of-use at the forefront.<br><strong>Interactive & Engaging UI:</strong> Beautiful, intuitive designs that captivate your audience.<br><strong>Responsive Layouts:</strong> Seamless experiences on all devices and screen sizes.<br>📩 Contact us to create UI/UX designs that elevate your app’s user experience and engagement.' },
    { id: 'app-testing-and-quality-assurance', title: 'App Testing and Quality Assurance', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we ensure your app is bug-free and performs optimally through rigorous testing and quality assurance.', description: 'Our expert QA team performs detailed testing to identify and fix issues before your app goes live, ensuring high performance and quality standards are met.', img: qaImg, techs: ['Manual & Automated Testing', 'Appium, Selenium for Automation', 'Test Case Design & Execution', 'UI/UX Testing', 'Performance Testing & Stress Testing', 'Bug Tracking & Issue Resolution'], details: '<strong>Comprehensive Testing:</strong> Thorough testing across all devices and platforms to ensure smooth performance.<br><strong>Quality Assurance:</strong> Detect bugs, optimize performance, and ensure your app meets industry standards.<br><strong>Scalable & Reliable:</strong> Ensuring your app is scalable and reliable as it grows in user base.<br>📩 Reach out to our QA team to ensure your app’s quality and performance before launch.' },
];

const MobileAppDevelopmentPage = () => {
    return (
        <div className="mobile-app-dev-page">
            <ServiceHero
                preTitle="Mobile App Development"
                title="Services for Mobile App Development"
                description="Our Mobile App Development services cover native (iOS, Android) and cross-platform solutions. We handle everything from concept and UI/UX design to development and deployment. Our apps are optimized for speed, security, and scalability, integrating advanced features to drive engagement and business success."
                solutionsHeading="We Provide Smart Solutions like"
                badges={heroBadges}
                mainImage={mainImg}
            />
            
            <div className="between-section-down"></div>

            <FeatureShowcase
                sidebarItems={showcaseSidebarItems}
                imageMap={showcaseImageMap}
            />
            
            <CardGrid
                title="Mobile App Development Services"
                description="We build mobile solutions that enhance user experience and drive business growth. Explore our tailored services designed for impact, scalability, and performance."
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

export default MobileAppDevelopmentPage;
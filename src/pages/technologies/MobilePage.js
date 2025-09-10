import React from 'react';
import './MobilePage.css';

// Import reusable components
import ServiceHero from '../../components/services/ServiceHero';
import FeatureShowcase from '../../components/services/FeatureShowcase';
import CardGrid from '../../components/services/CardGrid';
import ServiceDetail from '../../components/services/ServiceDetail';

// --- ASSET IMPORTS ---
import mainImg from '../../assets/technology/mobile/main-page-image.png';
import badge1 from '../../assets/technology/mobile/main-page-logo-1.png';
import badge2 from '../../assets/technology/mobile/main-page-logo-2.png';
import badge3 from '../../assets/technology/mobile/main-page-logo-3.png';

import cardLangs from '../../assets/technology/mobile/pogramming languages - kotlin.jpg';
import cardFrameworks from '../../assets/technology/mobile/framework & tools.png';
// import cardBackend from '../../assets/technology/mobile/Backend & Cloud.jpg';
import cardTesting from '../../assets/technology/mobile/testing & devtool.png';

import detailAndroid from '../../assets/technology/mobile/android.png';
import detailIos from '../../assets/technology/mobile/IOS.png';
import detailReactNative from '../../assets/technology/mobile/React native.png';
import detailFlutter from '../../assets/technology/mobile/flutter.png';
import detailIonic from '../../assets/technology/mobile/lonic.png';
import detailXamarin from '../../assets/technology/mobile/xamarin.png';

const heroBadges = [
    { src: badge1, alt: 'Badge 1' },
    { src: badge2, alt: 'Badge 2' },
    { src: badge3, alt: 'Badge 3' },
];

const showcaseFeatures = [
    { key: 'IOS', title: 'iOS & Android Native', desc: 'We build platform-specific native applications for iOS (Swift) and Android (Kotlin) to deliver the highest level of performance, security, and user experience. Native development allows us to fully leverage device features and provide a seamless integration with the operating system.' },
    { key: 'cross', title: 'Cross-Platform Apps', desc: 'For businesses looking to reach a wider audience efficiently, we develop cross-platform applications using frameworks like React Native and Flutter. This approach allows us to write a single codebase that runs on both iOS and Android, reducing development time and cost without compromising quality.' },
    { key: 'Security', title: 'Mobile App Security', desc: 'Security is paramount in our mobile app development process. We implement best practices such as data encryption, secure authentication using OAuth and JWT, and code obfuscation to protect user data and prevent unauthorized access.' },
    { key: 'Testing', title: 'Testing & QA', desc: 'We ensure our mobile apps are bug-free and perform flawlessly through rigorous testing. Our QA process includes unit testing, UI testing with tools like Espresso and XCTest, and beta testing through platforms like TestFlight and Google Play Console.' },
    { key: 'AWS', title: 'Backend & Cloud Integration', desc: 'Our mobile apps are powered by robust and scalable backends. We use cloud services like Firebase for real-time data and authentication, and build custom backends with Node.js hosted on AWS or Google Cloud to handle complex business logic.' },
    { key: 'Store', title: 'App Store & Play Store Deployment', desc: 'We manage the entire submission process for the Apple App Store and Google Play Store. This includes preparing app listings, managing certificates, and ensuring compliance with all platform guidelines, including privacy policies and App Store Optimization (ASO).' },
    { key: 'Maintenance', title: 'Maintenance & Updates', desc: 'Post-launch, we provide ongoing maintenance and support to ensure your app remains up-to-date and performs optimally. We use crash analytics tools like Firebase Crashlytics to monitor stability and roll out new features and updates seamlessly.' },
];

const servicesCards = [
    { title: 'Programming Languages', desc: 'We use Kotlin and Java for Android app development, ensuring native performance, clean architecture, and seamless user experiences.', img: cardLangs },
    { title: 'Frameworks & Tools', desc: 'Our apps leverage Jetpack, Android SDK, Room DB, and Retrofit to ensure smooth UI, reliable data handling, and fast API communication.', img: cardFrameworks },
    // { title: 'Backend & Cloud', desc: 'We build powerful backends with Firebase, Node.js, Laravel, and host on AWS or Google Cloud to deliver scalable and secure mobile solutions.', img: cardBackend },
    { title: 'Testing & Dev Tools', desc: 'Our QA process includes Espresso, JUnit, and Mockito, supported by Android Studio, Git, and Gradle for efficient development and CI/CD.', img: cardTesting }
];

const detailSections = [
    { id: 'android', title: 'Android Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we offer end-to-end Android app development services that help businesses reach users on the world’s most popular mobile platform.', description: 'This diversity of experience drives real results for our clients.', img: detailAndroid, techs: ['Kotlin, Java', 'Jetpack, Android SDK, Retrofit, Room DB', 'Firebase, Node.js, Laravel, AWS', 'Espresso, JUnit, Mockito', 'Android Studio, Git, Gradle'], details: '<strong>Market Share:</strong> Android powers over 70% of global smartphones. <br><strong>Customization:</strong> Highly flexible and open-source platform. <br> 📩 Get in touch with our team to schedule a free consultation.' },
    { id: 'ios-development', title: 'iOS Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we deliver robust and high-performance iOS applications tailored to your business goals. We help you craft seamless and engaging apps that run flawlessly on all Apple devices.', description: 'This diversity of experience drives real results for our clients.', img: detailIos, techs: ['Custom iOS App Development', 'UI/UX Design for iOS', 'iPad & iPhone App Development', 'Swift and Objective-C', 'Wearable App Development (Apple Watch)', 'App Store Deployment & Optimization'], details: 'We combine elegant design with clean code to bring your ideas to life. Whether you\'re building a product from scratch or modernizing an existing iOS app — Onclick is your trusted partner. <br> 📩 Get in touch with our team to schedule a free consultation.' },
    { id: 'react-native', title: 'React Native Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we specialize in cross-platform mobile solutions using React Native, ensuring faster delivery and reduced development costs.', description: 'Leveraging the power of React Native allows us to deliver native-like user experiences and seamless performance.', img: detailReactNative, techs: ['React Native CLI, Expo, React Navigation', 'Redux, Context API, Zustand', 'Firebase, Node.js, Express.js, GraphQL', 'Jest, Detox, React Native Testing Library', 'VS Code, GitHub Actions, Metro Bundler'], details: '<strong>Cross-Platform Advantage:</strong> Build for Android and iOS using one codebase.<br><strong>Rapid Development:</strong> Hot reloading and reusable components speed up development cycles. <br> 📩 Get in touch with our team to schedule a free consultation.' },
    { id: 'flutter', title: 'Flutter Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we deliver cutting-edge Flutter app development services that enable businesses to launch beautiful, high-performance apps for both Android and iOS from a single codebase.', description: 'We help brands accelerate development without compromising quality or user experience.', img: detailFlutter, techs: ['Flutter SDK', 'Dart programming language', 'State management: Provider, Riverpod, BLoC', 'Firebase, REST APIs, GraphQL integration', 'Testing with Flutter Test, Mockito', 'Android Studio, VS Code, Flutter DevTools'], details: '<strong>Single Codebase:</strong> One app for both Android and iOS platforms.<br><strong>Faster Time-to-Market:</strong> Rapid development and hot reload for seamless iteration.<br><strong>Modern UI/UX:</strong> Create expressive and flexible UIs with Material and Cupertino widgets.<br>📩 Get in touch with our Flutter experts to turn your vision into a high-performing cross-platform app.' },
    { id: 'ionic', title: 'Ionic Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we specialize in Ionic app development to help businesses build high-quality hybrid mobile applications using a single codebase. Ideal for cost-effective and fast-to-market solutions.', description: 'Our team delivers robust, cross-platform apps that work seamlessly across devices.', img: detailIonic, techs: ['Ionic Framework', 'Capacitor and Cordova plugins', 'HTML5, CSS3, JavaScript, TypeScript', 'Angular, React, or Vue', 'API integration using REST, GraphQL', 'VS Code, Ionic CLI, Git'], details: '<strong>Cross-Platform Compatibility:</strong> Build apps for Android, iOS, and web from a single codebase.<br><strong>Native Performance:</strong> Access native device features with Capacitor and Cordova.<br><strong>Fast Development:</strong> Reusable code and components enable quicker project turnaround.<br>📩 Reach out to our Ionic team to start your hybrid app journey today.' },
    { id: 'xamarin', title: 'Xamarin Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we build high-performance mobile applications using Xamarin, a powerful Microsoft-backed framework that enables native app experiences using .NET and C#.', description: 'Our Xamarin experts turn business ideas into powerful mobile experiences.', img: detailXamarin, techs: ['Xamarin.Forms & Xamarin.Native', 'C# programming with .NET MAUI', 'Visual Studio with Xamarin extensions', 'MVVM architecture, Prism, and ReactiveUI', 'API integration: RESTful services, SignalR', 'Cross-platform libraries & NuGet packages'], details: '<strong>Code Reusability:</strong> Up to 90% shared code across platforms.<br><strong>Native Performance:</strong> Access to platform-specific APIs and hardware features.<br><strong>Microsoft Ecosystem:</strong> Deep integration with Azure, Visual Studio, and .NET Core.<br>📩 Connect with our Xamarin development team to bring your app ideas to life.' }
];

const MobilePage = () => {
    return (
        <div className="mobile-tech-page">
            <ServiceHero
                preTitle="Mobile"
                title="Services for Scalable Company Growth"
                description="Our company offers complete Mobile Solutions, covering native app development (iOS and Android), cross-platform apps with Flutter and React Native, and enterprise mobility services. We design and build secure, high-performance mobile applications tailored to your business needs."
                solutionsHeading="We Provide Smart Solutions With"
                badges={heroBadges}
                mainImage={mainImg}
            />
            
            <FeatureShowcase
                title="Mobile Technology Features"
                features={showcaseFeatures}
            />
            
            <CardGrid
                title="Our Tech Stack for Mobile App Development"
                description="We build scalable, high-performance mobile apps tailored to your business needs using modern technologies, robust frameworks, and cloud-based solutions."
                cards={servicesCards}
            />

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

export default MobilePage;

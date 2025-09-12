import React from 'react';
import './InfrastructurePage.css';
import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';

// Import reusable components
import ServiceHero from '../../components/services/ServiceHero';
import FeatureShowcase from '../../components/services/FeatureShowcase';
import CardGrid from '../../components/services/CardGrid';
import ServiceDetail from '../../components/services/ServiceDetail';

// --- ASSET IMPORTS ---
import mainImg from '../../assets/technology/infrastructure/main.avif';
import badgeGcp from '../../assets/technology/infrastructure/GCP.png';
import badgeCircleci from '../../assets/technology/infrastructure/circleci logo.png';
import badgeApache from '../../assets/technology/infrastructure/apache.png';
import badgeDocker from '../../assets/technology/infrastructure/docker logo.png';

import cardIac from '../../assets/technology/infrastructure/Infrastructure-as-code.jpg';
import cardCicd from '../../assets/technology/infrastructure/CICD Pipelines.png';
import cardCloud from '../../assets/technology/infrastructure/Cloud Infrastructure.png';
// import cardMonitoring from '../../assets/technology/infrastructure/Monitoring & Automation.png';

import detailAws from '../../assets/technology/infrastructure/AWS.png';
import detailGcp from '../../assets/technology/infrastructure/Google Cloud Development.png';
import detailAzure from '../../assets/technology/infrastructure/Azure.png';
import detailGradle from '../../assets/technology/infrastructure/Gradle.png';
import detailJenkins from '../../assets/technology/infrastructure/Jenkins.png';
import detailSelenium from '../../assets/technology/infrastructure/Selenium Automation.png';

const heroBadges = [
    { src: badgeGcp, alt: 'GCP' },
    { src: badgeCircleci, alt: 'CircleCI' },
    { src: badgeApache, alt: 'Apache' },
    { src: badgeDocker, alt: 'Docker' },
];

const showcaseFeatures = [
    { key: 'Docker', title: 'Docker', desc: 'We use Docker to containerize applications, packaging them with all their dependencies into a standardized unit for software development. This ensures consistency across development, testing, and production environments, and simplifies deployment.' },
    { key: 'Kubernetes', title: 'Kubernetes', desc: 'For managing containerized applications at scale, we use Kubernetes. This powerful open-source platform automates the deployment, scaling, and operation of application containers, providing a resilient and efficient infrastructure.' },
    { key: 'Terraform', title: 'Terraform', desc: 'We manage infrastructure as code using Terraform. This allows us to define and provision data center infrastructure using a declarative configuration language, enabling us to build, change, and version infrastructure safely and efficiently.' },
    { key: 'GitLabCI', title: 'GitLab CI/CD', desc: 'We leverage GitLab\'s integrated CI/CD capabilities to automate our software delivery pipeline. From code commits to testing and deployment, GitLab CI/CD enables us to build, test, and release software faster and more reliably within a single platform.' },
    { key: 'CircleCI', title: 'CircleCI', desc: 'As a leading continuous integration platform, we use CircleCI to automate our development workflows. It provides fast feedback on code changes, enabling our teams to build and release high-quality software with confidence and speed.' },
    { key: 'GCP', title: 'Google Cloud Platform (GCP)', desc: 'We build and deploy applications on Google Cloud Platform, leveraging its suite of services for computing, storage, data analytics, and machine learning. GCP provides a secure, scalable, and innovative foundation for our cloud-native solutions.' },
    { key: 'Apache', title: 'Apache HTTP Server', desc: 'As one of the most widely used web servers, we rely on Apache for its robustness, flexibility, and extensive module support. We configure and manage Apache servers to host secure, high-performance websites and web applications.' },
];

const servicesCards = [
    { title: 'Infrastructure as Code (IaC)', desc: 'We automate infrastructure provisioning using tools like Terraform and AWS CloudFormation—making deployments consistent, repeatable, and easy to manage across environments.', img: cardIac },
    { title: 'CI/CD Pipelines', desc: 'We design and maintain Continuous Integration and Continuous Deployment pipelines that accelerate releases, catch bugs early, and improve code quality through automation.', img: cardCicd },
    { title: 'Cloud Infrastructure', desc: 'Our expertise spans AWS, Azure, and GCP—ensuring your applications are deployed in high-availability, cost-optimized, and scalable cloud environments.', img: cardCloud },
    // { title: 'Monitoring & Automation', desc: 'We integrate tools like Prometheus, Grafana, and ELK Stack for proactive monitoring and alerting—so your system is observable, secure, and self-healing.', img: cardMonitoring }
];

const detailSections = [
    { id: 'aws', title: 'AWS', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we leverage AWS to build, deploy, and scale applications in the cloud with the most comprehensive and widely adopted cloud platform.', description: 'We help businesses take advantage of AWS’ scalability, flexibility, and security to build robust, cloud-native applications.', img: detailAws, techs: ['AWS EC2, S3, RDS, Lambda', 'AWS Elastic Beanstalk, CloudFormation', 'AWS IAM, VPC, Security Groups', 'Amazon DynamoDB, SQS, SNS', 'AWS CloudWatch, CloudTrail', 'AWS SDK, AWS Amplify, AWS CLI'], details: '<strong>Scalable & Flexible:</strong> Build your app for scale with minimal effort.<br><strong>Highly Secure:</strong> Robust security features for data protection and compliance.<br><strong>Comprehensive Cloud Services:</strong> From compute to storage, networking to analytics, AWS has it all.<br>📩 Leverage AWS for your next project and let us handle the complexities of cloud deployment.' },
    { id: 'google-cloud', title: 'Google Cloud Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech harnesses the power of Google Cloud to deliver flexible, scalable, and secure cloud applications. With advanced features like big data processing and AI/ML tools, GCP is ideal for businesses looking to innovate.', description: 'We provide comprehensive cloud solutions that leverage the best of Google’s infrastructure for your business’ success.', img: detailGcp, techs: ['Google Cloud Compute Engine, Kubernetes Engine', 'BigQuery, Cloud Spanner', 'Google Cloud Storage, Pub/Sub', 'Firebase, Google Cloud Functions', 'Cloud IAM, VPC, Security Center', 'Google APIs, Cloud Vision, TensorFlow'], details: '<strong>Global Scale:</strong> Build apps that scale globally with Google’s infrastructure.<br><strong>AI & ML Tools:</strong> Integrate machine learning, NLP, and AI capabilities with ease.<br><strong>Flexible & Reliable:</strong> Access Google’s high-performance cloud tools for diverse business needs.<br>📩 Let’s take your business to the cloud with Google Cloud’s powerful solutions.' },
    { id: 'azure', title: 'Azure Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech helps businesses leverage the flexibility and power of Microsoft Azure to build, deploy, and scale applications in the cloud. With Azure’s broad set of tools and services, we enable businesses to innovate and meet complex needs.', description: 'From cloud storage to AI solutions, Azure enables us to provide cutting-edge cloud solutions for all your business requirements.', img: detailAzure, techs: ['Azure App Services, Virtual Machines', 'Azure SQL Database, Cosmos DB', 'Azure Functions, Logic Apps', 'Azure DevOps, Azure Monitor', 'Azure Blob Storage, Azure CDN', 'Azure Active Directory, Security Center'], details: '<strong>Enterprise-Grade Security:</strong> Advanced security tools to protect your cloud infrastructure.<br><strong>Hybrid Cloud Flexibility:</strong> Seamlessly integrate on-premises and cloud environments.<br><strong>Comprehensive Services:</strong> Full stack from compute, networking, storage to analytics.<br>📩 Take your business to new heights with Azure’s cutting-edge cloud solutions.' },
    { id: 'gradle', title: 'Gradle', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech uses Gradle for fast, flexible, and modern build automation. As one of the most popular build tools, Gradle allows us to automate development workflows, ensuring smooth CI/CD processes and faster delivery.', description: 'We use Gradle to optimize your development lifecycle by automating tasks, increasing build speed, and maintaining high-quality standards.', img: detailGradle, techs: ['Gradle 7+, Kotlin DSL', 'JVM, Android, Java, Groovy', 'Gradle Wrapper, Multi-project Builds', 'CI/CD Integrations with Jenkins, GitLab', 'Dependency Management, Versioning', 'Test Automation: JUnit, TestNG'], details: '<strong>Faster Builds:</strong> Multi-project builds and incremental compilation improve build times.<br><strong>Powerful Plugins:</strong> Hundreds of community plugins for integration with various tools.<br><strong>Seamless CI/CD:</strong> Integrates easily with Jenkins, GitHub Actions, and more.<br>📩 Optimize your build and deployment process with Gradle.' },
    { id: 'jenkins', title: 'Jenkins', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we use Jenkins to automate your software development processes through continuous integration and delivery (CI/CD). Jenkins is a highly extensible, open-source tool that enables automated testing, building, and deployment.', description: 'We streamline development with Jenkins, allowing for faster feedback, higher quality, and quicker releases.', img: detailJenkins, techs: ['Jenkins Pipeline, Blue Ocean', 'GitHub, GitLab, Bitbucket Integrations', 'Docker, Kubernetes for Containerized CI/CD', 'Test Automation with Selenium, JUnit', 'Cloud CI/CD with AWS, GCP, Azure', 'Jenkins Shared Libraries, Plugins'], details: '<strong>Automate Your Workflow:</strong> Continuous Integration/Continuous Deployment pipelines for smoother releases.<br><strong>Extensibility:</strong> Jenkins’ large plugin ecosystem allows for tailored solutions.<br><strong>Cloud & Containerized CI/CD:</strong> Seamless integration with cloud services and Docker.<br>📩 Let Jenkins handle your CI/CD pipeline and boost your development productivity.' },
    { id: 'selenium', title: 'Selenium Automation', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech uses Selenium for end-to-end testing, ensuring that your web applications function as expected across all browsers and devices. Selenium allows for automated web browser testing, saving time and improving accuracy.', description: 'We leverage Selenium to ensure quality assurance with automated testing scripts that work across multiple environments.', img: detailSelenium, techs: ['Selenium WebDriver, Grid', 'TestNG, JUnit for Test Framework', 'Page Object Model (POM)', 'Cross-Browser Testing with Docker', 'Continuous Integration with Jenkins', 'Headless Browsing with ChromeDriver'], details: '<strong>Cross-Browser Testing:</strong> Test your application across all popular browsers.<br><strong>End-to-End Automation:</strong> Automate your functional testing to ensure application reliability.<br><strong>Seamless CI Integration:</strong> Automate your testing alongside your continuous integration pipeline.<br>📩 Let’s automate your web testing with Selenium for higher quality and faster releases.' }
];

const InfrastructurePage = () => {
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
            "name": "Infra & DevOps",
            "item": "https://www.onclickinfotech.com/technologies/infra-devops"
        }]
    };

    return (
        <div className="infrastructure-page">
            <SEO 
              title="Infrastructure & DevOps Technologies | AWS, Docker & Kubernetes"
              description="Our infrastructure and DevOps stack includes AWS, Docker, Kubernetes, and Terraform. We build automated, scalable, and resilient systems to accelerate your software delivery pipeline."
              url="/technologies/infra-devops"
              image={mainImg}
            />
            <StructuredData data={breadcrumbData} />

            <ServiceHero
                preTitle="Infrastructure & DevOps"
                title="Services for Scalable Business Growth"
                description="Our Infrastructure services provide businesses with secure, scalable, and resilient IT environments. We manage on-premises setups, cloud infrastructure (AWS, Azure, GCP), and hybrid models with industry best practices. We ensure your infrastructure supports optimal performance, high availability, and disaster recovery."
                solutionsHeading="We Provide Smart Solutions With"
                badges={heroBadges}
                mainImage={mainImg}
            />

            <FeatureShowcase
                title="Key Infrastructure & DevOps Tools"
                features={showcaseFeatures}
            />
            
            <CardGrid
                title="Our Infrastructure & DevOps Excellence"
                description="We streamline your software delivery pipeline with scalable infrastructure and DevOps practices—ensuring faster deployments, reliability, and agility at every stage of development."
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

export default InfrastructurePage;
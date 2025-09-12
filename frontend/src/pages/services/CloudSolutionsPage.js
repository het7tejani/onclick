import React from 'react';
import './CloudSolutionsPage.css';
import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';

// Import reusable components
import ServiceHero from '../../components/services/ServiceHero';
import FeatureShowcase from '../../components/services/FeatureShowcase';
import CardGrid from '../../components/services/CardGrid';
import ServiceDetail from '../../components/services/ServiceDetail';

// --- ASSET IMPORTS ---
// Hero and Badges
import mainImg from '../../assets/services/cloud/badges/main.jpg';
import badgeCloud from '../../assets/services/cloud/badges/cloud computing.png';
import badgeMicrosoft from '../../assets/services/cloud/badges/microsoft cloud solution.png';
import badgeGoogle from '../../assets/services/cloud/badges/google cloud .png';

// Card Grid
import devsecopsImg from '../../assets/services/cloud/cards/DevSecOps  Security at Every Stage.png';
import costImg from '../../assets/services/cloud/cards/Cloud Cost Optimization.png';
import nativeImg from '../../assets/services/cloud/cards/Cloud-Native App Development.png';

// Service Details
import appDevImg from '../../assets/services/cloud/details/Cloud Application Development.png';
import migrationImg from '../../assets/services/cloud/details/Cloud Migration Services.png';
import automationImg from '../../assets/services/cloud/details/DevOps Automation and Consulting.png';
import setupImg from '../../assets/services/cloud/details/Infrastructure Setup and Management.png';
import securityImg from '../../assets/services/cloud/details/Cloud Security Solutions.png';

const heroBadges = [
    { src: badgeCloud, alt: 'Cloud Computing' },
    { src: badgeMicrosoft, alt: 'Microsoft Cloud Solution' },
    { src: badgeGoogle, alt: 'Google Cloud' },
];

const showcaseFeatures = [
    { key: 'HybridCloud', title: 'Hybrid Cloud Solutions', desc: 'We design and manage hybrid cloud environments that blend public and private clouds with on-premise infrastructure. This approach offers the perfect balance of security, scalability, and cost-efficiency, allowing you to keep sensitive data in-house while leveraging the power of the public cloud for other workloads.' },
    { key: 'GCP', title: 'Google Cloud Platform Solutions', desc: 'Harness the power of Google\'s global infrastructure. We specialize in deploying and managing solutions on GCP, including services like Compute Engine for VMs, Kubernetes Engine for container orchestration, and BigQuery for large-scale data analytics. Our expertise ensures your GCP environment is optimized for performance and cost.' },
    { key: 'KubernetesDevOps', title: 'Kubernetes & Containerization', desc: 'Modernize your application deployment with Docker containers and Kubernetes orchestration. We help you containerize your applications for portability and build robust Kubernetes clusters that automate scaling, deployment, and management, leading to more resilient and efficient systems.' },
    { key: 'MonitoringTools', title: 'Cloud Monitoring & Logging', desc: 'Gain complete visibility into your cloud infrastructure. We implement comprehensive monitoring and logging solutions using tools like Prometheus, Grafana, and the ELK Stack. This allows for proactive issue detection, performance analysis, and security auditing across your entire environment.' },
    { key: 'AutoScaling', title: 'Auto-Scaling Solutions', desc: 'Never over-provision again. We configure auto-scaling for your cloud resources, ensuring your application can handle traffic spikes seamlessly without manual intervention. This dynamic scaling optimizes both performance and cost, so you only pay for what you use.' },
    { key: 'DisasterRecovery', title: 'Cloud Disaster Recovery', desc: 'Protect your business from unexpected downtime. We create and implement robust disaster recovery plans using cloud-native services. Our strategies include automated backups, multi-region failover, and regular testing to ensure your data is safe and your business can recover quickly from any incident.' },
];

const servicesCards = [
    { title: 'DevSecOps : Security at Every Stage', desc: 'Embed security within your DevOps pipeline. We apply security best practices throughout the development cycle, ensuring your infrastructure and applications are protected from vulnerabilities in real-time.', img: devsecopsImg },
    { title: 'Cloud Cost Optimization', desc: 'Don\'t just scale, scale smartly. Our cloud cost optimization services help you track, monitor, and reduce unnecessary cloud expenses. We employ best practices to ensure you only pay for resources you need.', img: costImg },
    { title: 'Cloud-Native App Development', desc: 'Unlock the full potential of the cloud with cloud-native applications. We help you build applications designed to fully exploit cloud environments, focusing on scalability, resilience, and efficiency.', img: nativeImg }
];

const detailSections = [
    { id: 'cloud-application-development', title: 'Cloud Application Development', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we build scalable, reliable, and high-performing cloud-native applications tailored to your business needs.', description: 'We design, develop, and deploy cloud applications that empower businesses with greater flexibility, faster innovation, and cost efficiency.', img: appDevImg, techs: ['AWS, Microsoft Azure, Google Cloud Platform (GCP)', 'Serverless Architectures (Lambda, Azure Functions)', 'Microservices & Containerization (Docker, Kubernetes)', 'APIs & Backend-as-a-Service (Firebase, AWS Amplify)', 'CI/CD Pipelines for Deployment', 'Monitoring Tools: CloudWatch, Azure Monitor'], details: '<strong>Cloud-Native Architecture:</strong> Design robust and scalable applications on cloud platforms.<br><strong>Flexible & Cost-Efficient:</strong> Pay-as-you-go models and easy scalability to meet dynamic demands.<br><strong>Faster Time-to-Market:</strong> Rapid development and deployment of feature-rich applications.<br>📩 Contact our cloud development team to bring your app idea to the cloud—securely and efficiently.' },
    { id: 'cloud-migration-services', title: 'Cloud Migration Services', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech offers seamless and secure cloud migration services that help businesses modernize their infrastructure and unlock the benefits of the cloud.', description: 'Whether you\'re moving from on-premise to cloud or between cloud providers, our team ensures a smooth, secure, and cost-effective transition.', img: migrationImg, techs: ['AWS Migration Hub, Azure Migrate, Google Cloud Migrate', 'Lift-and-Shift, Re-platforming, and Re-architecting', 'Database Migration Tools: AWS DMS, Azure Data Factory', 'Cloud Security & Compliance Planning', 'Data Backup & Recovery Planning', 'Post-Migration Optimization & Monitoring'], details: '<strong>Zero Downtime Migration:</strong> Move to the cloud with minimal operational disruption.<br><strong>Tailored Migration Strategy:</strong> Choose the right migration path based on your goals and systems.<br><strong>Cost & Performance Optimization:</strong> Improve system efficiency and reduce infrastructure costs.<br>📩 Speak with our migration experts to begin your secure, strategic move to the cloud.' },
    { id: 'devops-automation-and-consulting', title: 'DevOps Automation and Consulting', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech delivers end-to-end DevOps automation and consulting services to streamline your software development lifecycle.', description: 'Our DevOps solutions increase development speed, enhance software quality, and reduce deployment risks with automation at every stage.', img: automationImg, techs: ['CI/CD Tools: Jenkins, GitLab CI, GitHub Actions', 'Infrastructure as Code: Terraform, Ansible', 'Containerization: Docker, Kubernetes', 'Monitoring & Logging: Prometheus, Grafana, ELK Stack', 'Source Control: Git, Bitbucket', 'Automated Testing & Deployment Pipelines'], details: '<strong>Automated Workflows:</strong> Reduce manual effort with CI/CD pipelines and testing automation.<br><strong>Faster Releases:</strong> Deliver updates quickly and reliably with continuous integration and deployment.<br><strong>Custom DevOps Consulting:</strong> Tailored strategies to fit your business and technical goals.<br>📩 Get in touch with our DevOps experts to automate and optimize your development processes.' },
    { id: 'infrastructure-setup-and-management', title: 'Infrastructure Setup and Management', preTitle: 'OUR TECHNOLOGY', subtitle: 'At OnClick Infotech, we offer scalable infrastructure setup and management services that ensure high availability, security, and performance of your IT environment.', description: 'We build, monitor, and manage cloud-based infrastructure tailored to your workloads, ensuring consistent performance and reliability.', img: setupImg, techs: ['AWS, Azure, Google Cloud Infrastructure Setup', 'Virtual Machines, Load Balancers, Auto Scaling', 'VPC, Subnets, Security Groups Configuration', 'Infrastructure Monitoring & Logging Tools', 'Backup & Disaster Recovery Planning', '24/7 Infrastructure Support'], details: '<strong>Secure & Scalable:</strong> Infrastructure built to grow with your business and secure your data.<br><strong>Proactive Monitoring:</strong> Real-time monitoring to prevent issues before they impact users.<br><strong>Cost Optimization:</strong> Efficient resource allocation for minimal operational overhead.<br>📩 Contact our infrastructure specialists to build a resilient and high-performance cloud environment.' },
    { id: 'cloud-security', title: 'Cloud Security Solutions', preTitle: 'OUR TECHNOLOGY', subtitle: 'OnClick Infotech provides robust cloud security solutions to protect your data, applications, and infrastructure from threats.', description: 'From identity management to threat detection, we ensure your cloud operations are secure, compliant, and resilient to attacks.', img: securityImg, techs: ['Cloud Security Platforms: AWS Security Hub, Azure Security Center', 'IAM (Identity & Access Management)', 'Data Encryption (at rest and in transit)', 'Firewalls, WAF, and Network Security', 'SIEM & Threat Detection Tools', 'Compliance Audits: GDPR, HIPAA, SOC 2'], details: '<strong>End-to-End Security:</strong> Protect every layer of your cloud infrastructure and data.<br><strong>Compliance Ready:</strong> Ensure alignment with industry standards and regulatory requirements.<br><strong>Proactive Threat Management:</strong> Detect, prevent, and respond to potential threats in real-time.<br>📩 Connect with our cloud security experts to safeguard your digital assets and maintain user trust.' },
];

const CloudSolutionsPage = () => {
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
            "name": "Cloud Solutions and DevOps",
            "item": "https://www.onclickinfotech.com/services/cloud-solutions-and-devops"
        }]
    };

    return (
        <div className="cloud-solutions-page">
            <SEO 
              title="Cloud & DevOps Solutions | AWS, Azure & GCP Experts"
              description="Modernize your IT infrastructure with our cloud solutions and DevOps services. We offer cloud migration, automation, and management for AWS, Azure, and GCP to enhance scalability and efficiency."
              url="/services/cloud-solutions-and-devops"
              image={mainImg}
            />
            <StructuredData data={breadcrumbData} />
            <ServiceHero
                preTitle="Cloud Solutions and DevOps"
                title="Services for Cloud Solutions and DevOps"
                description="We offer comprehensive Cloud Solutions and DevOps services to modernize your IT infrastructure. Our team specializes in cloud migration, cloud-native app development, and managed cloud services on AWS, Azure, and GCP. With a DevOps-first mindset, we implement CI/CD pipelines, Infrastructure as Code (IaC), Kubernetes orchestration, and automated monitoring."
                solutionsHeading="We Provide Smart Solutions With"
                badges={heroBadges}
                mainImage={mainImg}
            />
            
            <div className="between-section-down"></div>

            <FeatureShowcase
                title="Key Cloud & DevOps Features"
                features={showcaseFeatures}
            />
            
            <CardGrid
                title="Cloud Solutions & DevOps Transformation"
                description="Revolutionize your IT infrastructure with our tailored cloud solutions and DevOps transformation services. We empower organizations with cloud-native architectures and automated DevOps workflows for faster delivery and continuous innovation."
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

export default CloudSolutionsPage;
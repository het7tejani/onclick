import React from 'react';
import './PolicyPage.css';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const PrivacyPolicyPage = () => {
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
            "name": "Privacy Policy",
            "item": "https://www.onclickinfotech.com/privacy-policy"
        }]
    };

    return (
        <div className="policy-page-wrapper">
            <SEO 
              title="Privacy Policy"
              description="Read the Onclick Infotech Privacy Policy to understand how we collect, use, and protect your personal information when you use our services and website."
              url="/privacy-policy"
            />
            <StructuredData data={breadcrumbData} />

            <div className="policy-container">
                <div className="policy-content">
                    <h1>Privacy Policy</h1>
                    <p>
                        Our Services help users build, modify, and deploy website and applications of any kind with simple
                        natural language chat and prompts. As a part of our Services, users want us to collect and record
                        information that helps us provide Services.
                    </p>
                    <p>
                        Please read this policy carefully to understand our policies and practices regarding your personal
                        information and how we will manage it. If you do not agree with our policies and practices, you should
                        not continue access our Services. By accessing or using our Services, you agree to this Privacy Policy.
                        This policy may change from time to time. Your continued use of the Services after we make changes is
                        deemed to be acceptance of those changes, so please check the policy periodically for updates.
                    </p>
                    <p>
                        If you or your organization has an agreement with us, that agreement may have privacy terms that also
                        apply to the personal information you provide to us under that agreement. Please review the terms of
                        that agreement as they may be different or more restrictive than the terms in this Privacy Policy.
                    </p>

                    <h2 id="policy-1">1. Introduction</h2>
                    <p>As a provider of a wide range of technology services—including but not limited to website development, application development, artificial intelligence and machine learning solutions, digital marketing, software development, cloud services, and other IT-related offerings—we occasionally need to gather certain pieces of information from our clients and website visitors in order to deliver our services effectively. This policy outlines what we collect, why we collect it, how we use it, and how we safeguard it, all in accordance with applicable privacy laws and best practices.</p>

                    <h2 id="policy-2">2. Information We Collect</h2>
                    <p>We may collect personal and non-personal information from you in a variety of ways, depending on how you interact with our website, reach out to us, or engage with our services. This information may be provided directly by you (for example, through a contact form, a project inquiry, or email communication), or it may be collected automatically via our website analytics tools.</p>
                    <p>The types of information we typically collect include, but are not limited to:</p>
                    <ol>
                        <li>Personal details such as your full name, email address, phone number, company name, and any other contact or professional information you choose to provide when reaching out to us or requesting a service.</li>
                        <li>Project-related information you may voluntarily submit, which helps us understand your requirements and tailor our services accordingly.</li>
                        <li>Billing and payment details (when applicable), collected securely for invoicing or processing service-related payments.</li>
                        <li>Technical data such as your IP address, browser type, device information, operating system, and other usage-related statistics gathered through cookies and analytics platforms to help us improve our website and service delivery.</li>
                    </ol>

                    <h2 id="policy-3">3. How We Use the Information</h2>
                    <p>We use the information we collect for various business and operational purposes, all aimed at enhancing your experience, ensuring smooth project execution, and maintaining the highest standards of service. This includes, but is not limited to:</p>
                    <ol>
                        <li>Responding to your inquiries, requests, and feedback in a timely and efficient manner.</li>
                        <li>Providing the services you’ve asked for, which may involve:
                            <ul>
                                <li>Internal communication</li>
                                <li>Team collaboration</li>
                                <li>The use of third-party tools or platforms to deliver specific project components</li>
                            </ul>
                        </li>
                        <li>Managing our client relationships, invoicing, and service agreements.</li>
                        <li>Sending important updates, service notifications, or (only with your permission) marketing and promotional messages relevant to our services or new offerings.</li>
                        <li>Analyzing website traffic and usage trends to better understand how users interact with our digital platforms and to make improvements accordingly.</li>
                        <li>Ensuring security, preventing fraud, and complying with any applicable legal or regulatory requirements.</li>
                    </ol>

                    <h2 id="policy-4">4. Disclosure and Sharing of Information</h2>
                    <p>OnClick Infotech does not sell, trade, or rent your personal information to others. However, in some cases, we may share limited data with trusted service providers or third-party partners who assist us in delivering specific parts of our services—such as cloud storage providers, email hosting services, analytics platforms, or payment gateways. We only work with vendors that uphold data security and confidentiality, and we ensure that they use your information solely for the purposes we authorize.</p>
                    <p>We may also disclose information if required by law, in response to legal requests, or if we believe in good faith that such action is necessary to protect our rights, the safety of our clients, or to investigate potential violations of our terms and policies.</p>

                    <h2 id="policy-5">5. Cookies and Tracking Technologies</h2>
                    <p>Like most modern websites, we use cookies and similar tracking technologies to provide a smoother user experience, remember your preferences, and gather analytics about how visitors interact with our site. These technologies help us understand user behavior, identify pages that are most or least useful, and ultimately improve the way our website functions.</p>
                    <p>You can choose to accept or decline cookies through your browser settings. Please note that disabling cookies may affect the functionality and user experience of our website.</p>

                    <h2 id="policy-6">6. Data Security</h2>
                    <p>We take data security very seriously and implement a combination of technical, administrative, and physical safeguards to help protect your personal data from unauthorized access, misuse, or loss. Our internal practices follow industry standards to secure both digital and physical access to sensitive information. However, while we make every reasonable effort to protect your data, it’s important to understand that no method of transmission over the internet or method of electronic storage is 100% secure, and therefore we cannot guarantee absolute security.</p>

                    <h2 id="policy-7">7. Your Rights and Choices</h2>
                    <p>Depending on where you reside, you may have certain rights under data protection laws, such as the right to access the information we hold about you, request corrections, or ask us to delete your data entirely. You may also have the right to object to or limit certain types of processing and to withdraw any consent you’ve previously given us (such as for marketing emails).</p>
                    <p>If you would like to make a request regarding your personal data or have any concerns about how we use it, please contact us directly using the information provided below.</p>

                    <h2 id="policy-8">8. Third-Party Links</h2>
                    <p>From time to time, our website may include links to third-party websites or services that are not operated by us. Please be aware that once you leave our site, we are not responsible for the privacy practices or content of those external platforms. We recommend reviewing the privacy policies of any third-party websites you visit.</p>

                    <h2 id="policy-9">9. Children's Privacy</h2>
                    <p>Our services and website are not intended for children under the age of 13, and we do not knowingly collect personal information from individuals in this age group. If we become aware that we have inadvertently gathered data from a child without parental consent, we will take immediate steps to delete such information.</p>

                    <h2 id="policy-10">10. Updates to This Policy</h2>
                    <p>We reserve the right to modify this Privacy Policy at any time in response to changes in our services, applicable laws, or evolving privacy standards. Any updates will be reflected on this page along with a revised "Last Updated" date. We encourage you to check this page periodically to stay informed about how we are protecting your data.</p>

                    <h2 id="policy-11">11. Contact Information</h2>
                    <p>If you have any questions, concerns, or feedback regarding this Privacy Policy or any aspect of our data handling practices, please don’t hesitate to get in touch with us. We’re happy to help and will respond as promptly as possible.</p>
                    <p>
                        Onclick Infotech<br />
                        <strong>Email:</strong> info@onclickinfotech.com<br />
                        <strong>Phone:</strong> +91 96584 97526<br />
                        <strong>Website:</strong> <a href="https://onclickinfotech.com" target="_blank" rel="noopener noreferrer"> https://onclickinfotech.com</a>
                    </p>
                </div>

                <div className="sidebar">
                    <ul className="sidebar-list">
                        <li><a href="#policy-1">Introduction</a></li>
                        <li><a href="#policy-2">Information We Collect</a></li>
                        <li><a href="#policy-3">How We Use the Information</a></li>
                        <li><a href="#policy-4">Disclosure and Sharing of Information</a></li>
                        <li><a href="#policy-5">Cookies and Tracking Technologies</a></li>
                        <li><a href="#policy-6">Data Security</a></li>
                        <li><a href="#policy-7">Your Rights and Choices</a></li>
                        <li><a href="#policy-8">Third-Party Links</a></li>
                        <li><a href="#policy-9">Children's Privacy</a></li>
                        <li><a href="#policy-10">Updates to This Policy</a></li>
                        <li><a href="#policy-11">Contact Information</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
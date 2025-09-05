import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.svg";

const toKebabCase = (str) => str.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');

const dropdownContent = {
  services: [
    {
      title: "WEB DEVELOPMENT",
      path: "/services/web-development",
      links: [
        { name: "Frontend Development", anchor: "#Frontend" },
        { name: "Backend Development", anchor: "#Backend" },
        { name: "CMS Development", anchor: "#CMS" },
        { name: "Web Application Development", anchor: "#Web-Application" },
        { name: "Website Maintenance and Support", anchor: "#Website-Maintenance" }
      ]
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      path: "/services/mobile-app-development",
      links: [
        { name: "Android App Development", anchor: `#${toKebabCase("Android App Development")}` },
        { name: "iOS App Development", anchor: `#${toKebabCase("iOS App Development")}` },
        { name: "Cross-platform App Development", anchor: `#${toKebabCase("Cross-platform App Development")}` },
        { name: "App UI/UX Design", anchor: `#${toKebabCase("App UI/UX Design")}` },
        { name: "App Testing and Quality Assurance", anchor: `#${toKebabCase("App Testing and Quality Assurance")}` }
      ]
    },
    {
      title: "DIGITAL MARKETING",
      path: "/services/digital-marketing",
      links: [
        { name: "SEO (Search Engine Optimization)", anchor: `#${toKebabCase("SEO (Search Engine Optimization)")}` },
        { name: "PPC (Pay-Per-Click Advertising)", anchor: `#${toKebabCase("PPC (Pay-Per-Click Advertising)")}` },
        { name: "Content Marketing", anchor: `#${toKebabCase("Content Marketing")}` },
        { name: "Email Marketing Campaigns", anchor: `#${toKebabCase("Email Marketing Campaigns")}` },
        { name: "Social Media Marketing (SMM)", anchor: `#${toKebabCase("Social Media Marketing (SMM)")}` }
      ]
    },
    {
      title: "CLOUD SOLUTIONS AND DEVOPS",
      path: "/services/cloud-solutions-and-devops",
      links: [
        { name: "Cloud Application Development", anchor: `#${toKebabCase("Cloud Application Development")}` },
        { name: "Cloud Migration Services", anchor: `#${toKebabCase("Cloud Migration Services")}` },
        { name: "DevOps Automation and Consulting", anchor: `#${toKebabCase("DevOps Automation and Consulting")}` },
        { name: "Infrastructure Setup and Management", anchor: `#${toKebabCase("Infrastructure Setup and Management")}` },
        { name: "Cloud Security Solutions", anchor: `#${toKebabCase("Cloud Security Solutions")}` }
      ]
    },
  ],
  technology: [
    {
      title: "Mobile",
      path: "/technologies/mobile",
      links: ["Android", "IOS", "React-Native", "Flutter", "Ionic", "Xamarin"].map(l => ({ name: l, anchor: `#${toKebabCase(l)}`}))
    },
    {
      title: "Front-End",
      path: "/technologies/front-end",
      links: ["Angular", "React JS", "Vue", "Typescript", "WPF", "HTML 5"].map(l => ({ name: l, anchor: `#${toKebabCase(l)}`}))
    },
    {
      title: "Back-End",
      path: "/technologies/back-end",
      links: ["Node", "Php", "ASP.Net", "Java", "Python", "laravel"].map(l => ({ name: l, anchor: `#${toKebabCase(l)}`}))
    },
    {
      title: "Database",
      path: "/technologies/database",
      links: ["MySQL", "Dynamo DB", "PostgreSQL", "Oracle", "Mongo DB", "Redis"].map(l => ({ name: l, anchor: `#${toKebabCase(l)}`}))
    },
    {
      title: "Infra & DevOps",
      path: "/technologies/infra-devops",
      links: ["AWS", "Google Cloud", "Azure", "Gradle", "Jenkins", "Selenium"].map(l => ({ name: l, anchor: `#${toKebabCase(l)}`}))
    },
    {
      title: "CMS",
      path: "/technologies/cms",
      links: ["Magento", "WordPress", "Shopify", "Umbraco", "Drupal", "Joomla"].map(l => ({ name: l, anchor: `#${toKebabCase(l)}`}))
    }
  ],
};

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services", dropdown: "services" },
  { name: "Technology", path: "/technologies", dropdown: "technology" },
  { name: "About", path: "/about" },
  { name: "Company", path: "/company" },
];

const ArrowDownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="#64748b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowUpIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 15L12 9L6 15"
      stroke="#64748b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [caretPosition, setCaretPosition] = useState(null);
  const timeoutRef = useRef(null);

  const navLinkRefs = {
    Services: useRef(null),
    Technology: useRef(null),
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleAccordion = (accordionId) => {
    setOpenAccordion(openAccordion === accordionId ? null : accordionId);
  };

  const handleMouseEnter = (dropdownId, ref) => {
    clearTimeout(timeoutRef.current);
    if (ref.current) {
      const linkRect = ref.current.getBoundingClientRect();
      const headerRect = ref.current
        .closest(".header-content")
        .getBoundingClientRect();
      const caretLeft = linkRect.left - headerRect.left + linkRect.width / 2;
      setCaretPosition(caretLeft);
    }
    setActiveDropdown(dropdownId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const dropdownMenuProps = {
    style: { "--caret-left": caretPosition ? `${caretPosition}px` : "50%" },
    onMouseEnter: () => clearTimeout(timeoutRef.current),
    onMouseLeave: handleMouseLeave,
  };

  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <div className="logo">
            <Link to="/"><img src={logo} alt="Limelight Logo" /></Link>
          </div>
          <nav className="nav-links">
            <ul>
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  ref={navLinkRefs[link.name]}
                  onMouseEnter={() =>
                    link.dropdown &&
                    handleMouseEnter(link.dropdown, navLinkRefs[link.name])
                  }
                  onMouseLeave={() => link.dropdown && handleMouseLeave()}
                >
                  <Link
                    to={link.path}
                    className={link.dropdown ? "solutions-link" : ""}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && activeDropdown === link.dropdown && (
                    <div className="dropdown-menu" {...dropdownMenuProps}>
                      {dropdownContent[link.dropdown].map((column) => (
                        <div className="dropdown-column" key={column.title}>
                          <Link to={column.path || '#'}><h3 className="dropdown-title">{column.title}</h3></Link>
                          <ul className="dropdown-list">
                            {column.links.map((subLink) => (
                              <li key={subLink.name}>
                                <Link to={`${column.path}${subLink.anchor}`}>{subLink.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="action-buttons">
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </div>
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21"
                stroke="#475569"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="#475569"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="#475569"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <div className="logo">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}><img src={logo} alt="Limelight Logo" /></Link>
          </div>
          <button
            className="close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <nav className="mobile-nav-links">
          <ul>
            {navLinks.map((item) => (
              <li
                key={item.name}
                className={item.dropdown ? "accordion-item" : ""}
              >
                <div
                  className={`accordion-header ${
                    openAccordion === item.name ? "open" : ""
                  }`}
                  onClick={() => item.dropdown && toggleAccordion(item.name)}
                >
                  <Link
                    to={item.path}
                    onClick={(e) => {
                      if (item.dropdown) e.preventDefault();
                      else setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown &&
                    (openAccordion === item.name ? (
                      <ArrowUpIcon />
                    ) : (
                      <ArrowDownIcon />
                    ))}
                </div>
                {item.dropdown && (
                  <div
                    className={`accordion-content ${
                      openAccordion === item.name ? "open" : ""
                    }`}
                  >
                    <ul>
                      {dropdownContent[item.dropdown].map((column) => (
                        <React.Fragment key={column.title}>
                          <li className="mobile-dropdown-title">
                            <Link to={column.path} onClick={() => setIsMobileMenuOpen(false)}>{column.title}</Link>
                          </li>
                          {column.links.map((link) => (
                            <li key={link.name}>
                              <Link
                                to={`${column.path}${link.anchor}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </React.Fragment>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-action-buttons">
          <Link to="/contact" className="btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
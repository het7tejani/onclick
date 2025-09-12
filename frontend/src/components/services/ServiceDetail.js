import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ section, imagePosition }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleExpand = () => {
        setIsExpanded(prev => !prev);
    };

    const { id, preTitle, title, subtitle, description, img, techs, details } = section;

    return (
        <section 
            className={`service-detail-section ${imagePosition === 'left' ? 'image-on-left' : ''}`} 
            id={id}
        >
            <div className="content-column">
                <p className="pre-title">{preTitle}</p>
                <h2>{title}</h2>
                <p className="subtitle">{subtitle}</p>
                <p className="description">{description}</p>
                <div className={`expandable-content ${isExpanded ? 'expanded' : ''}`}>
                    <div className="services-list">
                        <h3>⚙️ Technologies We Use</h3>
                        <ul>
                            {techs.map(tech => <li key={tech}>{tech}</li>)}
                        </ul>
                    </div>
                    <p className="additional-content" dangerouslySetInnerHTML={{ __html: details }}></p>
                </div>
                <div className="button-group">
                    <Link to="/contact" className="cta-link">
                        GET TO KNOW US
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                    <button className="view-more-btn" onClick={toggleExpand} aria-expanded={isExpanded}>
                        {isExpanded ? 'VIEW LESS' : 'VIEW MORE'}
                        <svg className="view-more-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                </div>
            </div>
            <div className="image-column">
                <img src={img} alt={title} loading="lazy" />
            </div>
        </section>
    );
};

export default ServiceDetail;
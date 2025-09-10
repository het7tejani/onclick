import React from 'react';
import './ServiceHero.css';

const ServiceHero = ({ preTitle, title, description, solutionsHeading, badges, mainImage }) => {
    return (
        <div className="service-hero-container">
            <div className="service-hero-inner">
                <div className="text-content">
                    <p className="pre-title">{preTitle}</p>
                    <h1>{title}</h1>
                    <p className="description">{description}</p>
                    <h2 className="solutions-heading">{solutionsHeading}</h2>
                    <div className="badges-grid">
                        {badges.map((badge, index) => (
                            <div className="badge-item" key={index}>
                                <img src={badge.src} alt={badge.alt} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="image-content">
                    <img src={mainImage} alt={preTitle} loading="eager" />
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;
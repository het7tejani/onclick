import React from 'react';
import './Hero.css';
import ParticleCanvas from './ParticleCanvas';

const Hero = ({ title, description, listItems, buttonText, buttonLink, image, imageAlt, imageOnLeft }) => {
    return (
        <section className="hero-section">
            <ParticleCanvas />
            <div className={`container hero-container ${imageOnLeft ? 'image-on-left' : ''}`}>
                <div className="hero-content">
                    <h1 className="hero-title">{title}</h1>
                    {listItems ? (
                        <ul className="hero-list">
                            {listItems.map((item, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                            ))}
                        </ul>
                    ) : (
                        <p className="hero-description">{description}</p>
                    )}
                    {buttonText && <a href={buttonLink || "#contact"} className="btn-primary hero-button">{buttonText}</a>}
                </div>
                {image && (
                    <div className="hero-image">
                        <img src={image} alt={imageAlt || title} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;
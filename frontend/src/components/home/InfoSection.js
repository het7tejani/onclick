import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './InfoSection.css';

const AnimatedSection = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add('is-visible');
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return React.cloneElement(children, { ref });
};

const InfoSection = ({ title, listItems, image, buttonText, buttonLink, imageOnLeft }) => {
    return (
        <AnimatedSection>
            <section className="info-section">
                <div className={`container info-container ${imageOnLeft ? 'row-reverse' : ''}`}>
                    <div className="info-content-wrapper kd-animated">
                        <h3 className="info-content-title">{title}</h3>
                        <div className="info-content-text text-sm">
                            <ul>
                                {listItems.map((item, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                                ))}
                            </ul>
                        </div>
                        {buttonText && (
                             <div className="info-content-link">
                                <Link to={buttonLink || '#'} className="btn-primary">{buttonText}</Link>
                            </div>
                        )}
                    </div>
                    <div className="info-featured-wrapper kd-animated">
                        <div className="info-featured-image">
                            <img loading="lazy" decoding="async" src={image} alt={title} />
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
};

export default InfoSection;
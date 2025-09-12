import React, { useEffect, useRef } from 'react';
import './CardGrid.css';

const CardGrid = ({ title, description, cards }) => {
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        cardRefs.current.forEach((el, index) => {
            if (el) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`;
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, [cards]);

    return (
        <div className="card-grid-container">
            <div className="section-header">
                <h2>{title}</h2>
                <p className="text-sm">{description}</p>
            </div>
            <div className="card-grid">
                {cards.map((card, index) => (
                    <div className="category-card" key={card.title} ref={el => cardRefs.current[index] = el}>
                        <div className="category-content">
                            <h3>{card.title}</h3>
                            <p className="text-sm">{card.desc}</p>
                        </div>
                        <div className="category-image">
                            <img src={card.img} alt={card.title} loading="lazy" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardGrid;
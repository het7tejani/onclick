import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

const AnimateCounter = ({ to, duration = 2000 }) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    
    useEffect(() => {
        if (isInView && ref.current) {
            let startTimestamp = null;
            const start = 0;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const value = Math.floor(progress * (to - start) + start);
                if (ref.current) {
                  ref.current.textContent = value;
                }
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [isInView, to, duration]);

    return <span ref={ref}>0</span>;
};

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    <div className="stat-item">
                        <h1><AnimateCounter to={65} /><sup>+</sup></h1>
                        <h3>Trusted Clients</h3>
                    </div>
                    <div className="stat-item">
                        <h1><AnimateCounter to={11} /><sup>+</sup></h1>
                        <h3>Countries</h3>
                    </div>
                    <div className="stat-item">
                        <h1><AnimateCounter to={380} /><sup>+</sup></h1>
                        <h3>Projects</h3>
                    </div>
                    <div className="stat-item">
                        <h1><AnimateCounter to={4} /><sup>+</sup></h1>
                        <h3>Years of Experience</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
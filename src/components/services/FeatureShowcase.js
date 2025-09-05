import React, { useState } from 'react';
import './FeatureShowcase.css';

const FeatureShowcase = ({ sidebarItems, imageMap }) => {
    const [activeTech, setActiveTech] = useState(sidebarItems[0]?.key);

    if (!sidebarItems || sidebarItems.length === 0) {
        return null;
    }

    return (
        <div className="feature-showcase-container">
            <div className="sidebar">
                {sidebarItems.map(item => (
                    <div 
                        key={item.key} 
                        className={`sidebar-item ${activeTech === item.key ? 'active' : ''}`} 
                        onClick={() => setActiveTech(item.key)}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
            <div className="main-content-display">
                <div className="artboard-container">
                    <div className="artboard">
                        {activeTech && <img src={imageMap[activeTech]} alt={activeTech} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureShowcase;

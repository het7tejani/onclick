import React, { useState, useEffect, useRef } from "react";
import "./FeatureShowcase.css";

const FeatureShowcase = ({ title, features }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightStyle, setHighlightStyle] = useState({});
  const [contentKey, setContentKey] = useState(0);
  const tabsContainerRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, features.length);
  }, [features]);

  useEffect(() => {
    const calculateHighlight = () => {
      const activeItem = itemRefs.current[activeIndex];
      if (activeItem) {
        setHighlightStyle({
          top: `${activeItem.offsetTop}px`,
          height: `${activeItem.offsetHeight}px`,
        });
      }
    };

    calculateHighlight();
    window.addEventListener("resize", calculateHighlight);
    return () => window.removeEventListener("resize", calculateHighlight);
  }, [activeIndex, features.length]);

  const handleTabClick = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
      setContentKey((prevKey) => prevKey + 1);
    }
  };

  if (!features || features.length === 0) {
    return null;
  }

  return (
    <div className="feature-showcase-container-creative">
      {/* Title full width */}
      <div className="feature-showcase-title">
        <h2>{title}</h2>
      </div>

      {/* Grid layout for left + right */}
      <div className="feature-showcase-grid">
        <div className="feature-showcase-content-creative">
          <div className="feature-tabs-container" ref={tabsContainerRef}>
            <div
              className="feature-tabs-highlight"
              style={highlightStyle}
            ></div>
            {features.map((item, index) => (
              <div
                key={item.key}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`feature-tab-item ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleTabClick(index)}
                onKeyPress={(e) =>
                  (e.key === "Enter" || e.key === " ") && handleTabClick(index)
                }
                role="button"
                tabIndex="0"
                aria-selected={activeIndex === index}
              >
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="feature-showcase-display-creative" key={contentKey}>
          <div className="feature-display-description">
            <h3>{features[activeIndex]?.title}</h3>
            <p>{features[activeIndex]?.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;

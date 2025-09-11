import React from "react";
import './TrustedBy.css'

import logo1 from "../assets/about/logo/1.webp";
import logo2 from "../assets/about/logo/2.webp";
import logo3 from "../assets/about/logo/3.webp";
import logo4 from "../assets/about/logo/4.webp";
import logo5 from "../assets/about/logo/5.webp";
import logo6 from "../assets/about/logo/6.webp";
import logo7 from "../assets/about/logo/7.webp";
import logo8 from "../assets/about/logo/8.webp";
import logo9 from "../assets/about/logo/9.webp";
import logo10 from "../assets/about/logo/10.webp";
import logo11 from "../assets/about/logo/11.webp";
import logo12 from "../assets/about/logo/12.webp";
import logo13 from "../assets/about/logo/13.webp";
import logo14 from "../assets/about/logo/14.webp";


const TrustedBy = ({ speed = 60 }) => {
  // Two uneven rows (top and bottom)
  const allLogos = [
    // Top row
    { src: logo1, alt: "Logo 1", offsetY: -30 },
    { src: logo2, alt: "Logo 2", offsetY: -5 },
    { src: logo3, alt: "Logo 3", offsetY: -20 },
    { src: logo4, alt: "Logo 4", offsetY: -10 },
    { src: logo5, alt: "Logo 5", offsetY: -18 },
    { src: logo6, alt: "Logo 6", offsetY: -6 },
    { src: logo7, alt: "Logo 7", offsetY: -26 },

    // Bottom row
    { src: logo8, alt: "Logo 8", offsetY: 18 },
    { src: logo9, alt: "Logo 9", offsetY: 35 },
    { src: logo10, alt: "Logo 10", offsetY: 12 },
    { src: logo11, alt: "Logo 11", offsetY: 28 },
    { src: logo12, alt: "Logo 12", offsetY: 22 },
    { src: logo13, alt: "Logo 13", offsetY: 38 },
    { src: logo14, alt: "Logo 14", offsetY: 15 },
  ];

  return (
    <>
=      <section className="trusted-section">
        <h2>Trusted by CFOs and Leading Finance Teams</h2>
        <div className="logo-container">
          <div className="logo-slider">
            <div
              className="logo-track"
              style={{ animationDuration: `${speed}s` }}
            >
              {/* First loop */}
              {allLogos.map((logo, idx) => (
                <div
                  className="logo-item"
                  key={`first-${idx}`}
                  style={{
                    transform: `translateY(${logo.offsetY}px)`,
                  }}
                >
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </div>
              ))}

              {/* Second loop (for seamless scroll) */}
              {allLogos.map((logo, idx) => (
                <div
                  className="logo-item"
                  key={`second-${idx}`}
                  style={{
                    transform: `translateY(${logo.offsetY}px)`,
                  }}
                >
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedBy;

import React from 'react';
import './TrustedBy.css';

// Import local logo images from available assets
import clientLogo1 from '../assets/about/logo/1.webp';
import clientLogo2 from '../assets/about/logo/2.webp';
import clientLogo7 from '../assets/about/logo/7.webp';
import clientLogo8 from '../assets/about/logo/8.webp';
import clientLogo9 from '../assets/about/logo/9.webp';
import clientLogo10 from '../assets/about/logo/10.webp';
import clientLogo11 from '../assets/about/logo/11.webp';
import clientLogo12 from '../assets/about/logo/12.webp';
import clientLogo13 from '../assets/about/logo/13.webp';
import clientLogo14 from '../assets/about/logo/14.webp';
import clientLogo15 from '../assets/about/logo/15.webp';
import clientLogo16 from '../assets/about/logo/16.webp';
import clientLogo17 from '../assets/about/logo/17.webp';
import clientLogo18 from '../assets/about/logo/18.webp';
import clientLogo19 from '../assets/about/logo/19.webp';
import clientLogo20 from '../assets/about/logo/20.webp';
import clientLogo21 from '../assets/about/logo/21.webp';
import clientLogo22 from '../assets/about/logo/22.webp';

// Logos data
const allLogos = [
  { url: clientLogo21, alt: 'HDFC Bank', size: 180, offsetY: '-25%' },
  { url: clientLogo18, alt: 'SBI', size: 150, offsetY: '-5%' },
  { url: clientLogo19, alt: 'GIF', size: 130, offsetY: '-40%' },
  { url: clientLogo20, alt: 'Shah Investment', size: 120, offsetY: '45%' },
  { url: clientLogo17, alt: 'Bandhan', size: 140, offsetY: '-10%' },
  { url: clientLogo22, alt: 'Costa Coffee', size: 150, offsetY: '-30%' },
  { url: clientLogo7, alt: 'Rajhans', size: 170, offsetY: '30%' },
  { url: clientLogo8, alt: 'Cognizant', size: 160, offsetY: '-20%' },
  { url: clientLogo9, alt: 'Patidar', size: 120, offsetY: '15%' },
  { url: clientLogo10, alt: 'P.P.Savani', size: 120, offsetY: '-15%' },
  { url: clientLogo2, alt: 'Icon', size: 150, offsetY: '40%' },
  { url: clientLogo15, alt: 'BAPS', size: 140, offsetY: '-35%' },
  { url: clientLogo16, alt: 'Gas mate', size: 130, offsetY: '50%' },
  { url: clientLogo1, alt: 'Khalas', size: 140, offsetY: '-20%' },
  { url: clientLogo12, alt: 'Shiksha', size: 110, offsetY: '10%' },
  { url: clientLogo13, alt: 'CIJ', size: 160, offsetY: '35%' },
  { url: clientLogo11, alt: 'Shiksha', size: 110, offsetY: '-45%' },
  { url: clientLogo14, alt: 'RCloud', size: 140, offsetY: '5%' },
];

const TrustedBy = () => {
  return (
    <section className="logos-section">
      <h2 className="logos-title">Trusted by CFOs and Leading Finance Teams</h2>
      <div className="logos-container">
        <div className="logos-track">
          {[...allLogos, ...allLogos].map((logo, index) => (
            <div
              className="logo-slide"
              key={`${logo.alt}-${index}`}
              style={{
                width: `${logo.size}px`,
                height: `${logo.size}px`,
                '--translate-y': logo.offsetY,
              }}
            >
              <img src={logo.url} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
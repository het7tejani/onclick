import React from 'react';
import './Badges.css';
import badge1 from '../../assets/home/logo above footer/1.png';
import badge2 from '../../assets/home/logo above footer/2.png';
import badge3 from '../../assets/home/logo above footer/3.png';
import badge4 from '../../assets/home/logo above footer/4.png';
import badge5 from '../../assets/home/logo above footer/5.png';
import badge6 from '../../assets/home/logo above footer/6.png';

const badgesData = [
    { src: badge1, alt: 'Top Web Developers Clutch Badge' },
    { src: badge2, alt: 'GoodFirms Top Development Company Badge' },
    { src: badge3, alt: 'Top Development Company Badge' },
    { src: badge4, alt: 'Top Rated on Upwork Badge' },
    { src: badge5, alt: 'Top App Developers Badge' },
    { src: badge6, alt: 'Top Digital Agency Badge' }
];

const Badges = () => {
    return (
        <div className="badges-background">
            <section className="container">
                <div className="badges-container">
                    <div className="badges-flex">
                        {badgesData.map((badge, index) => (
                             <div className="badge-flex-item" key={index}>
                                <img src={badge.src} alt={badge.alt} className="badge-image" loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Badges;
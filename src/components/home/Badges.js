import React from 'react';
import './Badges.css';
import badge1 from '../../assets/home/logo above footer/1.png';
import badge2 from '../../assets/home/logo above footer/2.png';
import badge3 from '../../assets/home/logo above footer/3.png';
import badge4 from '../../assets/home/logo above footer/4.png';
import badge5 from '../../assets/home/logo above footer/5.png';
import badge6 from '../../assets/home/logo above footer/6.png';

const Badges = () => {
    return (
        <div className="badges-background">
            <section className="container">
                <div className="badges-container">
                    <div className="badges-flex">
                        <div className="badge-flex-item"><img src={badge1} alt="Badge 1" className="badge-image" /></div>
                        <div className="badge-flex-item"><img src={badge2} alt="Badge 2" className="badge-image" /></div>
                        <div className="badge-flex-item"><img src={badge3} alt="Badge 3" className="badge-image" /></div>
                        <div className="badge-flex-item"><img src={badge4} alt="Badge 4" className="badge-image" /></div>
                        <div className="badge-flex-item"><img src={badge5} alt="Badge 5" className="badge-image" /></div>
                        <div className="badge-flex-item"><img src={badge6} alt="Badge 6" className="badge-image" /></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Badges;

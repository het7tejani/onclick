import React from 'react';
import './WavyDivider.css';

const WavyDivider = ({ color = '#e0f2fe' }) => { // Changed default color to match image
    return (
        <div className="wavy-divider-container">
            <svg
                className="wavy-divider-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
            >
                <path
                    fill={color}
                    fillOpacity="1"
                    d="M0 93 L40 93 L40 83 L80 83 L80 97 L120 97 L120 88 L160 88 L160 78 L200 78 L200 90 L240 90 L240 100 L280 100 L280 92 L320 92 L320 82 L360 82 L360 96 L400 96 L400 87 L440 87 L440 77 L480 77 L480 89 L520 89 L520 99 L560 99 L560 91 L600 91 L600 81 L640 81 L640 95 L680 95 L680 86 L720 86 L720 76 L760 76 L760 88 L800 88 L800 98 L840 98 L840 90 L880 90 L880 80 L920 80 L920 94 L960 94 L960 85 L1000 85 L1000 75 L1040 75 L1040 87 L1080 87 L1080 97 L1120 97 L1120 89 L1160 89 L1160 79 L1200 79 L1200 93 L1240 93 L1240 84 L1280 84 L1280 98 L1320 98 L1320 89 L1360 89 L1360 79 L1400 79 L1400 91 L1440 91 V120 H0 Z"
                ></path>
            </svg>
        </div>
    );
};

export default WavyDivider;
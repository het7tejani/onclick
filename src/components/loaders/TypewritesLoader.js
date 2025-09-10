import React, { useState, useEffect } from 'react';
import './TypewriterLoader.css';

const TypewriterLoader = () => {
  const [text, setText] = useState('');
  const fullTextToType = '< Onclick Infotech />';

  useEffect(() => {
    let isMounted = true;
    let timeout;

    const type = (currentIndex = 0, isDel = false) => {
      if (!isMounted) return;

      setText(fullTextToType.substring(0, currentIndex));

      if (!isDel && currentIndex === fullTextToType.length) {
        // Pause at the end before deleting
        timeout = setTimeout(() => type(currentIndex - 1, true), 2000);
      } else if (isDel && currentIndex === 0) {
        // Pause at the beginning before typing
        timeout = setTimeout(() => type(currentIndex + 1, false), 500);
      } else {
        const nextIndex = isDel ? currentIndex - 1 : currentIndex + 1;
        const delay = isDel ? 100 : 150;
        timeout = setTimeout(() => type(nextIndex, isDel), delay);
      }
    };

    // Start typing after a short delay
    timeout = setTimeout(() => type(1, false), 200);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="typewriter-loader-container">
      <div className="typewriter-content-wrapper">
        <div className="typewriter-loader">
          <span className="typewriter-loader-text">{text}</span>
          <span className="typewriter-loader-cursor" />
        </div>
        <div className="loading-bar-wrapper">
          <div className="loading-bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default TypewriterLoader;

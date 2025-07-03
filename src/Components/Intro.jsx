import React, { useEffect, useState } from 'react';
import '../Styles/Intro.css';

function Intro() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100; // tweak based on when you want it to shrink
      setIsSticky(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="intro" id="Home">
      <div className={`photo ${isSticky ? 'shrink' : ''}`}>
        <div className="pic"></div>
      </div>

      <div className="bio">
        <h1>Hi! </h1>
        <h2>This is <span>Ekshta</span></h2>
        <h2>An Engineer</h2>
      </div>
    </div>
  );
}

export default Intro;


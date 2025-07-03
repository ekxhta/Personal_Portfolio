import React from 'react';
import '../Styles/Skillcard.css';

function Skillcard({ frontTitle, subtitle, backIcons }) {
  return (
    <div className="card-container">
      <div className="card-inner">
        <div className="card-front">
          <h3>{frontTitle}</h3>
          <h2>{subtitle}</h2>
        </div>
        <div className="card-back">
          {backIcons.map((icon, index) => (
            <img key={index} src={icon} alt="tech-icon" className="tech-icon" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skillcard;

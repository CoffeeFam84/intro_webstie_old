import React from 'react';
import './Roadmap.css';

const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="roadmap-header">
        <div className="roadmap-title">
          ROADMAP
        </div>
        <div className="horizental-bar"></div>
      </div>
      <div className="roadmap-body">
        <img src="/assets/roadmap-mobile.png" className="roadmap-img" />
      </div>
    </div>
  );
}

export default Roadmap;
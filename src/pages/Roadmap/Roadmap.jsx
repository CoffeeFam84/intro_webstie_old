import React from 'react';
import { useMediaQuery } from "react-responsive";
import './Roadmap.css';

const Roadmap = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 769px)' });

  return (
    <div className="roadmap container" id="roadmap">
      <div className="roadmap-header">
        <div className="roadmap-title">
          ROADMAP
        </div>
        <div className="horizental-bar"></div>
      </div>
      <div className="roadmap-body">
        {isMobile?
        <img src="/assets/Mobile-roadmap1.png" className="roadmap-img" />:
        <img src="/assets/Roadmap.png" className="roadmap-img" />}
      </div>
    </div>
  );
}

export default Roadmap;
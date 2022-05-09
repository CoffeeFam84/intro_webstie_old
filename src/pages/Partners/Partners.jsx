import React from 'react';
import './Partners.css';

const Partners = () => {
  return (
    <div className='partners'>
      <div className="partners-header">
        <div className="partners-title">PARTNERS</div>
        <div className="horizental-bar"></div>
      </div>
      <div className="partners-body">
        <img src="/assets/ebisus-logo.png"  />
        <img src="/assets/Roihua-logo.png"  />
        <img src="/assets/cyborg-logo.png"  />
        <img src="/assets/CRmax-logo.png"  />
        <img src="/assets/blacklabel-logo.png"  />
      </div>
    </div>
  );
}

export default Partners;
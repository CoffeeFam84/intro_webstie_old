import React from 'react';
import './Partners.css';

const Partners = () => {
  return (
    <div className='partners container'>
      <div className="partners-header">
        <div className="partners-title">PARTNERS</div>
        <div className="horizental-bar"></div>
      </div>
      <div className="partners-body">
        <img src="/assets/ebisus-logo.png" style={{maxWidth: '200px'}} />
        <img src="/assets/Roihua-logo.png" style={{maxWidth: '200px'}} />
        <img src="/assets/cyborg-logo.png" style={{maxWidth: '100px'}} />
        <img src="/assets/CRmax-logo.png" style={{maxWidth: '200px'}} />
        <img src="/assets/blacklabel-logo.png" style={{maxWidth: '100px'}} />
      </div>
    </div>
  );
}

export default Partners;
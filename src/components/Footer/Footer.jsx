import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-menu">
        <Link to="#" ><span>HOME</span></Link>
        <Link to="#" ><span>ABOUT</span></Link>
        <Link to="#" ><span>CROSMOSHOOTER</span></Link>
        <Link to="#" ><span>COLLECTIONS</span></Link>
        <Link to="#" ><span>ROADMAP</span></Link>
      </div>
      <div className="footer-info">
        <div className="footer-header">
          <div >Only on Cronos</div>
          <div style={{color: 'white'}} >Not affiliated with crypto.com</div>
        </div>
        <div className="footer-social">
          <img src="/assets/discord-1.svg" />
          <img src="/assets/twitter-1.svg" />
          <img src="/assets/instagram.svg" />
          <img src="/assets/M.svg" />
        </div>
        <div className="footer-copyright">
          Copyright © Crosmonaut NFT | All rights reserved - Privacy policy - Terms and conditions
        </div>
        <div className="footer-contact">Contact: crosmonautsnft@gmail.com</div>
      </div>
    </div>
  );
}

export default Footer;
import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-menu">
          <Link to="home" spy={true} smooth={true}>
            <span >HOME</span>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-10}>
            <span >ABOUT</span>
          </Link>
          <Link to="crosmoshooter" spy={true} smooth={true} offset={-90}>
            <span >CROSMOSHOOTER</span>
          </Link>
          <Link to="collections" spy={true} smooth={true} offset={-90}>
            <span >COLLECTIONS</span>
          </Link>
          <Link to="roadmap" spy={true} smooth={true} offset={-90}>
            <span >ROADMAP</span>
          </Link>
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
      
    </div>
  );
}

export default Footer;
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
            <a href='https://discord.com/invite/G876eZzjpg' target='_blank'><img src="/assets/discord-1.svg" /></a>
            <a href='https://twitter.com/crosmonaut' target='_blank'><img src="/assets/twitter-1.svg" /></a>
            <a href='https://www.instagram.com/crosmonauts/' target='_blank'><img src="/assets/instagram.svg" /></a>
            <a href='https://medium.com/@crosmonaut' target='_blank'><img src="/assets/M.svg" /></a>
          </div>
          <div className="footer-copyright">
            Copyright © Crosmonaut NFT | All rights reserved - 
            <a href="assets/Disclaimer.pdf" target="_blank">Privacy policy</a> - 
            <a href="assets/Disclaimer.pdf" target="_blank">Terms and conditions</a>
          </div>
          <div className="footer-contact">Contact: crosmonautsnft@gmail.com</div>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
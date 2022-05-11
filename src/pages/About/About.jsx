import React from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import HorizentalBar from '../../components/HorizentalBar/HorizentalBar.jsx';
import "./About.css";

const About = () => {
  return (
    <div className="container" id="about">
      <div className="about-header">
        <div className="about-title">
          About The Crosmonauts NFT Collection
        </div>
        <HorizentalBar width="60%" marginBottom="28px" marginTop="30px" />
      </div>
      <div className="about-body">
        <div>
          <div className="about-desc">
            We are a community oriented NFT Project on Cronos,
              Cronos is an EVM compatible blockchain with low fees.
            <br />
            <br />
            Check out our roadmap below and join our discord to 
              keep up with the latest news and meet the team!
          </div>
          <a className="crosmo-btn">
            JOIN DISCORD
            <ArrowForwardIosOutlinedIcon sx={{ paddingLeft: '10px'}} />
          </a>
        </div>
        <div className="about-img">
          <img src="/assets/crosmonauts.png" />
        </div>
      </div>
    </div>
  );
}

export default About;
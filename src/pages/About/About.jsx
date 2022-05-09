import React from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-heading">
        About The Crosmonauts NFT Collection
      </div>
      <div className="about-body">
        <div>
          <div  className="about-desc">
            We are a community oriented NFT Project on Cronos,
              Cronos is an EVM compatible blockchain with low fees.
            <br />
            <br />
            Check out our roadmap below and join our discord to 
              keep up with the latest news and meet the team!
          </div>
          <button className="btn-discord">
            JOIN DISCORD
            <ArrowForwardIosOutlinedIcon sx={{ paddingLeft: '19.07px'}} />
          </button>
        </div>
        <div>
          <img src="/assets/crosmonauts.png" />
        </div>
      </div>
    </div>
  );
}

export default About;
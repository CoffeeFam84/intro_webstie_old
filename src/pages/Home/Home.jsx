import React from 'react';
import { Link } from 'react-scroll';
import './Home.css';

const Home = () => {
  return (
    <div className='home' id="home">
      <div className="container inner-home">
        <div>
          <div className="img-title-div">
            <img src='/assets/title.png' className="img-title"/>
          </div>
          <div className="subtitle">
            <div className="subtitle-1">ONLY ON <span>CRONOS</span></div>
            <div className="subtitle-2">BLOCKCHAIN</div>
          </div>
        </div>
        <div>
          <img src="/assets/craft2.png" className="img-craft-2" /> 
          <img src="/assets/craft1.png" className="img-craft-1" /> 
        </div>
        <div className="home-arrow">
          <Link to="about" spy={true} smooth={true} offset={-10}>
            <img src="/assets/arrow-down.png" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
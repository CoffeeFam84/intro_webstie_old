import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className="img-title-div">
        <img src='/assets/title.png' className="img-title"/>
      </div>
      <div className="subtitle">
        <div className="subtitle-1">ONLY ON <span>CRONOS</span></div>
        <div className="subtitle-2">BLOCKCHAIN</div>
      </div>
      <img src="/assets/craft1.png" className="img-craft-1" /> 
      <img src="/assets/craft2.png" className="img-craft-2" /> 
    </div>
  )
}

export default Home;
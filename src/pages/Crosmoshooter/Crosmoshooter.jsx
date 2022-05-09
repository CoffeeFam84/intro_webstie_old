import React from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import "./Crosmoshooter.css";

const Crosmoshooter = () => {
  return (
    <div className="crosmoshooter">
      <div className="crosmoshooter-header">
        <span className="crosmoshooter-title">Crosmoshooter</span>
        <span className="vertical-bar"></span>
        <span className="crosmo-desc">
          Launched early march 2022, Crosmoshooter was the first WEB3 enabled 
          game on Cronos blockchain. Holders can play with and level up their 
          Crosmocraft NFT.
        </span>
      </div>
      <div className="cromoshooter-body">
        <video></video>
      </div>
      <div className="crosmoshooter-footer">
        <span className="crosmo-desc">
          Launched early march 2022, Crosmoshooter was the first WEB3 enabled 
          game on Cronos blockchain. Holders can play with and level up their 
          Crosmocraft NFT.
        </span>
        <button className="crosmoshooter-btn">
          BUY NOW
          <ArrowForwardIosOutlinedIcon sx={{paddingLeft: '20px'}}/>
        </button>
        <button className="crosmoshooter-btn">
          PLAY NOW
          <ArrowForwardIosOutlinedIcon sx={{paddingLeft: '20px'}}/>
        </button>
      </div>
    </div>
  );
}

export default Crosmoshooter;
import React from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import "./Crosmoshooter.css";

const Crosmoshooter = () => {
  return (
    <div className="container crosmoshooter" id="crosmoshooter">
      <div className="crosmoshooter-header">
        <span className="crosmoshooter-title">Crosmoshooter</span>
        <span className="vertical-bar"></span>
        <span className="crosmo-header-desc">
          Launched early march 2022, Crosmoshooter was the first WEB3 enabled 
          game on Cronos blockchain. Holders can play with and level up their 
          Crosmocraft NFT.
        </span>
      </div>
      <div className="cromoshooter-body">
        <iframe width='100%' height='100%'
        src="https://www.youtube.com/embed/XZe1fthBVXE?wmode=opaque&start=0"></iframe>
      </div>
      <div className="crosmoshooter-footer">
        <span className="crosmo-header-desc">
        Crosmoshooter is an arcade shooter game with endless levels, playable 
        with Crosmocraft NFTs. It feautures leagues, hi scores, tournaments, 
         rewards and much more.
        </span>

        <span className="crosmo-footer-desc">
          Launched early march 2022, 
          Crosmoshooter was the first WEB3 
          enabled game on Cronos 
          blockchain.  
          <br />
          <br />
          Holders can play  with and level up 
          their Crosmocraft NFT in an 
          arcade shooter game with endless 
          levels,
        </span>
        <div className="crosmo-footer-btn-wrapper">
          <a className="crosmo-btn">
            BUY NOW
            <ArrowForwardIosOutlinedIcon sx={{paddingLeft: '5px'}}/>
          </a>
          
          <a className="crosmo-btn" href="https://crosmoshooter.com/" target="_blank">
            PLAY NOW
            <ArrowForwardIosOutlinedIcon sx={{paddingLeft: '5px'}}/>
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Crosmoshooter;
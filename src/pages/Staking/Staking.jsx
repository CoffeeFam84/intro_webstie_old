import React from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import './Staking.css';

const Staking = () => {
  return (
    <div className="staking container">
      <div className="staking-header">
        <div className="staking-title">
          STAKING
        </div>
        <div className="horizental-bar"></div>
      </div>
      <div className="staking-card">
        <div className="staking-card-left">
          <div className="staking-card-desc">
            All of our collections are stakeable on Cyborgswap, a NFT 
            oriented DEX on Cronos Chain where you can trade, farm, earn 
            and stake your NFTs from several Cronos projects.
          </div>
          <div>
            <img src="/assets/cyborgswap.png" className="staking-card-img-mobile" />
          </div>
          <div className="staking-btn-wrapper">
            <a className="crosmo-btn">
               CYBORGSWAP
              <ArrowForwardIosOutlinedIcon sx={{padingLeft: '30px'}} />
            </a>
          </div>
        </div>
        <div className="staking-card-right">
          <img src="/assets/cyborgswap.png" className="staking-card-img" />
        </div>
      </div>
    </div>
  );
}

export default Staking;
import React from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import HorizentalBar from '../../components/HorizentalBar/HorizentalBar';
import './Merchandise.css';
const Merchandise = () => {
  return (
    <div className="merchandise">
      <div className="merchandise-header">
        <div className="merchandise-title">MERCHANDISE</div>
        <HorizentalBar />
      </div>
      <div className="merchandise-card">
        <div className="merchandise-card-title">
          Merchandise by BlkLabel UK
        </div>
        <div className="merchandise-body">
          <div className="merchandise-left">
            <div className="merchandise-desc">
              For our merch we are working with Black Label Clothing,
               they are an innovative brand that creates unique 
               designs with a focus on high quality garments. 
               <br />
               <br />
               Check them out on the links below!
            </div>
            <div className="merchandise-btn-wrapper">
              <button className="merchandise-btn">
                COMING SOON
                <ArrowForwardIosOutlinedIcon sx={{padingLeft: '30px'}} />
              </button>
              <img src="/assets/twitter.svg" />
            </div>
          </div>
          <div className="merchandise-right">
            <img src="/assets/shirts1.png" className="merchandise-bigshirt" />
            <img src="/assets/shirts2.png" className="merchandise-smallshirt"/>
          </div>
          <div className="merchandise-mobile-btn">
            Buy now
            <ArrowForwardIosOutlinedIcon sx={{padingLeft: '30px'}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Merchandise;
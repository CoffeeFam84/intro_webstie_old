import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useMediaQuery } from "react-responsive";
import './Collection.css';

const Collection = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };
  const isMobile = useMediaQuery({ query: '(max-width: 769px)' });
  return (
    <div className="collection container" id="collections">
      <div className="collection-header">
         <div className="collection-title">NFT COLLECTIONS</div>
         <span className="horizental-bar"></span>
      </div>
      <div className="collection-body">
        <Swiper
          navigation={!isMobile}
          pagination={pagination}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="collection-card">
              <div className="collection-card-left">
                <div className="collection-card-left-title">Crosmocrafts</div>
                <div className="collection-card-left-desc">
                  The Crosmocraft-collection launched in march 2022. Buyers were 
                  able to partake in a unique minting process, where they had to 
                  construct their own Crosmocrafts by combining the 3 necessary parts: 
                  a Booster, and Engine and a Space Deck. 
                  <br />
                  <br />
                  <span>Furthermore, a Crosmocraft is necessary to play the Crosmoshooter 
                  game. Holders of Crosmocrafts use their own NFT to play the game, 
                  and blow up some asteroids and enemy spacehips.</span>
                </div>
                <button className="crosmo-btn">
                  VIEW COLLECTION
                  <ArrowForwardIosOutlinedIcon sx={{padingLeft: '30px'}} />
                </button>
              </div>
              <div className="collection-card-right">
                <img src="/assets/craft3.png" className="collection-card-img" />
              </div>
              <a className="collection-card-btn">
                VIEW COLLECTION
                <ArrowForwardIosOutlinedIcon sx={{padingLeft: '30px'}} />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="collection-card">
              <div className="collection-card-left">
                <div className="collection-card-left-title">Crosmopilots</div>
                <div className="collection-card-left-desc">
                  <p >
                    An upcoming collection that will further expand the 
                    gamification of the Crosmonaut NFT project, these pilots 
                    will work as boosters in-game for Crosmoshooter. 
                    Providing a variety of in-game bonusses depending on 
                    the type of pilot that is being used.
                  </p>
                </div>
                <button className="crosmo-btn">
                  COMING SOON
                  <ArrowForwardIosOutlinedIcon sx={{padingLeft: '30px'}} />
                </button>
              </div>
              <div className="collection-card-right">
                <img src="/assets/crosmopilot.png" className="collection-card-img" />
              </div>
              <a className="collection-card-btn">
                VIEW COLLECTION
                <ArrowForwardIosOutlinedIcon sx={{padingLeft: '30px'}} />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="collection-card">
              <div className="collection-card-left">
                <div className="collection-card-left-title">Crosmonauts</div>
                <div className="collection-card-left-desc">
                  <p >
                    Among the first NFT collections on Cronos, the Crosmonauts is  an extremely limited collection of 1000 unique NFT's. The OG collection of this project.
                  </p>
                </div>
                <button className="crosmo-btn">
                  COMING SOON
                  <ArrowForwardIosOutlinedIcon sx={{padingLeft: '30px'}} />
                </button>
              </div>
              <div className="collection-card-right">
                <img src="/assets/crosmonatus1.png" className="collection-card-img" />
              </div>
              <a className="collection-card-btn">
                VIEW COLLECTION
                <ArrowForwardIosOutlinedIcon sx={{padingLeft: '30px'}} />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="collection-card">
              <div className="collection-card-left">
                <div className="collection-card-left-title">Crosmobabies</div>
                <div className="collection-card-left-desc">
                  <p >
                    The Crosmobabies were another free airdrop to all 
                    Crosmonaut holders, we aim to  continuesly reward 
                    holders in various ways.
                    These little babies are the perfect companion to your 
                    Crosmonaut NFT.
                  </p>
                </div>
                <button className="crosmo-btn">
                  VIEW COLLECTION
                  <ArrowForwardIosOutlinedIcon sx={{padingLeft: '30px'}} />
                </button>
              </div>
              <div className="collection-card-right">
                <img src="/assets/crosmobaby.png" className="collection-card-img" />
              </div>
              <a className="collection-card-btn">
                VIEW COLLECTION
                <ArrowForwardIosOutlinedIcon sx={{padingLeft: '30px'}} />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Collection;
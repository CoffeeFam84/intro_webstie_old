import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-scroll';
import cx from 'classnames';
import './Header.css';

const Header = (props) => {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [headerShow, setHeaderShow] = useState(false);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const stickHeader = () => {
    let windowHeight = window.scrollY;
    if (windowHeight > 300) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", stickHeader);
  }, []);

  return (
    <div className={cx("appHeader", {"blur-background": headerShow})}>
      <div className="container inner-menu">
        <Link to="home" spy={true} smooth={true} className='desktop-logo'>
          <img src="/assets/LogoShirt.png" />
        </Link>

          <Box sx={{  display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon fontSize='large'  />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem >
                <Link to="home" spy={true} smooth={true}>
                  <Typography textAlign="center">HOME</Typography>
                </Link>
              </MenuItem>
              <MenuItem >
                <Link to="about" spy={true} smooth={true} offset={-10}>
                  <Typography textAlign="center">ABOUT</Typography>
                </Link>
              </MenuItem>
              <MenuItem >
                <Link to="crosmoshooter" spy={true} smooth={true} offset={-90}>
                  <Typography textAlign="center">CROSMOSHOOTER</Typography>
                </Link>
              </MenuItem>
              <MenuItem >
                <Link to="collections" spy={true} smooth={true} offset={-90}>
                  <Typography textAlign="center">COLLECTIONS</Typography>
                </Link>
              </MenuItem>
              <MenuItem >
                <Link to="roadmap" spy={true} smooth={true} offset={-90}>
                  <Typography textAlign="center">ROADMAP</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Link to="home" spy={true} smooth={true}>
            <img src="/assets/LogoShirt.png" className='mobile-logo' />
          </Link>

          <div className="menu-items">
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
          <a href='https://discord.com/invite/G876eZzjpg' target='_blank'>
            <img src="/assets/discord.svg" className='discord-link' />
          </a>
      </div>
    </div>
  );
};
export default Header;

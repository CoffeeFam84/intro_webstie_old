import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import './Header.css';

const pages = ['HOME', 'ABOUT ', 'CROSMOSHOOTER', 'COLLECTIONS', 'ROADMAP'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [headerShow, setHeaderShow] = useState(false);

  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
        <img src="/assets/LogoShirt.png" className='desktop-logo' />

        <Box sx={{  display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
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
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <img src="/assets/LogoShirt.png" className='mobile-logo' />

        <div className="menu-items">
          <Link to="#" ><span>HOME</span></Link>
          <Link to="#" ><span>ABOUT</span></Link>
          <Link to="#" ><span>CROSMOSHOOTER</span></Link>
          <Link to="#" ><span>COLLECTIONS</span></Link>
          <Link to="#" ><span>ROADMAP</span></Link>
        </div>
        <img src="/assets/discord.svg" className='discord-link' />
      </div>
  );
};
export default Header;

import { AppBar, Toolbar, IconButton, Typography} from '@mui/material';
import {Menu, MenuItem, Box, Button} from '@mui/material';
import {MenuIcon} from '@mui/icons-material/Menu'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TopBarDisplay.css';

function TopBarDisplay() {
  const pages = [
    "Stanford Sigma Nu",
    "Hash Strikes", 
    "Hash Opportunities"
  ];
  const pageLinkMap = {
    "Stanford Sigma Nu": "/home",
    "Hash Strikes": "/hashstrikes",
    "Hash Opportunities": "/hashopportunities"
  }

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="TopBarDisplay">
      <AppBar position="static" style={{backgroundColor: "#C41E3A"}} >
        <Toolbar variant="dense">
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}> */}
            {/* <MenuIcon/> */}
          {/* </IconButton> */}
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={pageLinkMap[page]} style={{textDecoration: "none", color: "white"}}>
                  <Typography variant="h6" color="inherit" component="div">
                  {page}
                  </Typography>
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar> 
    </div>
  );
}

export default TopBarDisplay;

import { AppBar, Toolbar, IconButton, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import './TopBarDisplay.css';

function TopBarDisplay() {
  return (
    <div className="TopBarDisplay">
      <AppBar position="static" style={{backgroundColor: "#C41E3A"}} >
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon/>
          </IconButton>
        <Typography variant="h6" color="inherit" component="div">
         Stanford Sigma Nu 
        </Typography>
        </Toolbar>
      </AppBar> 
    </div>
  );
}

export default TopBarDisplay;

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DynamicNavBar(props ) {
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <p>
sdasdasd
</p>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

const LoginPageSend=()=>{
console.log("login")
navigate('Login')

}

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{display:"block",position:"static"}}>
        <Toolbar sx={{justifyContent:"space-between"}}>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{display:"flex",width:1 , alignItems:"center"}}  >
          <Typography
            variant="h6"
            component="div"
            sx={{  display: { xs: 'none', sm: 'block' },display:"flex"}}
          >
    <Avatar alt="Remy Sharp" src="https://www.creativefabrica.com/wp-content/uploads/2018/11/Kids-school-logo-by-DEEMKA-STUDIO.jpg"   sx={{ width: 56, height: 56 }}/>
          </Typography>


          <Box sx={{display:"flex",justifyContent:"center",width:1}}>

       
          <Box sx={{ display: { xs: 'none', sm: 'block' }, }}   >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>

          <Box style={{display:"flex"}}>
 
          <Button  sx={{ color: '#fff',width:1/4 }}>
              SignUp
              </Button>
              <Button  sx={{ color: '#fff' }} onClick={LoginPageSend}>
             Login
              </Button>
          </Box>

          </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}

      
        </Drawer>

      </nav>
    
    </Box>
  );
}

DynamicNavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DynamicNavBar;

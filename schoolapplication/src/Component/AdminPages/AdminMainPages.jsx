import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CreateStaffScreen from './AdminSubPages/CreateStaffScreen';
import AllStaff from './AdminSubPages/AllStaff';
// import Institude from './Admin_Screens/Institude';
// import InstitudeForm from './Admin_Screens/InstitudeForm'
// import ColorTheme from './Admin_Screens/ColorTheme'
// import ActivationPayment from './Admin_Screens/ActivationPayment'
// import InstituteDetail from './Admin_Screens/InstituteDetail'

export default function AdminMainScreen() {

const [manuList,setManuList]= React.useState([
  {
    name:"CreateStaff",
    route:"CreateStaff",
  },
  {
    name:"All Staff",
    route:"AllStaff"
  },{
    name:"Color Them",
    route:"colorthem",
  },{
    name:"Activation",
    route:"activation"
  },{
    name:"Institute Detail",
    route:"institutedetail"
  }
])


let navigation = useNavigate()
  const [state, setState] = React.useState({
    left: false,

  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {manuList.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={()=>{
                navigation(text.route)
              }}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
      

          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon />
              </IconButton>
              
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}



          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  

      {/* <Routes>
<Route path='/CreateStaff' element={<CreateStaffScreen/>}/>
<Route path='/AllStaff' element={<AllStaff/>}/>
      {/* 
<Route path='/colorthem' element={<ColorTheme/>}/> 
<Route path='/activation' element={<ActivationPayment/>}/> 
<Route path='/institutedetail' element={<InstituteDetail/>}/> 


</Routes>  
*/}
    </Box>
  );
}
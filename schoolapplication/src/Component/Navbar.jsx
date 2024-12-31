import React from 'react'
import { AppBar, Toolbar, Typography, Stack, Button } from '@mui/material'
// import logo from './Logo.png';

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar class="nav">
        <Typography variant="h6" component="div">
          {/* <img className='logo' src={logo} alt='hosh kr khargosh' /> */}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button style={{ backgroundColor: 'white' }} color="inherit"><i class=" mainIcon fa-solid fa-user-shield"></i> Teacher</Button>
          <Button style={{ backgroundColor: 'white' }} color="inherit"><i className=" mainIcon fa-solid fa-user-graduate"></i>Student</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
import { AppBar } from '@material-ui/core'
import { Menu as MenuIcon} from '@mui/icons-material';
import{ Button, IconButton, Toolbar, Typography } from '@mui/material'

import React from 'react'



const Header = () => {
  return (
    <AppBar position='static'>
     <Toolbar>
      <IconButton 
      size='large'
      edge='start'
      color='inherit'
      aria-label='menu'
      sx={{mr: 2}}>
          <MenuIcon />
      </IconButton>

      <Typography variant='h4'
      component="div" sx={{flexGrow: 1}}>
        Tennis Court Booking
      </Typography>
      <Button color='inherit'>
        Login
      </Button>
      <Button color='inherit'>
        Register
      </Button>
     </Toolbar>

    </AppBar>
  );
}

export default Header
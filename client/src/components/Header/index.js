

import Auth from '../../utils/auth';


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';

export default function ButtonAppBar() {

  const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
  return (
    <Box sx={{ flexGrow: 1, color: 'green'}}>
      <AppBar  position="static">
        <Toolbar>
        
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1 ,
            }}
          >
            Leashed 🦮
          </Typography>
          
          {Auth.loggedIn() ? (
            <>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" href="/login">
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
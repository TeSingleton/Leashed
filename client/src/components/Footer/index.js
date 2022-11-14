import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PetsIcon from '@mui/icons-material/Pets';
import Auth from '../../utils/auth';

export default function Footer() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);


  return (
   
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
       {Auth.loggedIn() ? (
        <>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction  icon={<AccountCircleIcon  fontSize="large"/>} href="/me"/>
          <BottomNavigationAction  icon={<PetsIcon  fontSize="large"/>} href="/gallery"/>
          <BottomNavigationAction icon={<MailOutlineIcon fontSize="large"/>} href="/messages"/>
        </BottomNavigation>
        </>
      ) : (
        <></>
      )}
      </Paper>
    </Box>
  );
}

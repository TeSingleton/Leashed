import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from '../Images/leashed-logo.png'




// import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box>
          <img id="img1" src={logo} alt="leashed logo"/>
          <h1>Find local pets in your area and get leashed today!</h1>
        </Box>
        
      </Container>
    </React.Fragment>
  );
}





export default Home;

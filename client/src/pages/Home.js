import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



const Home = () => {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" id="petContainer">
        
          <img id="img1" src="../assets/pictures/leashed-logo.png" alt="Leasehed Logo" />  
          <Box id="homeDiv">
            <h3>Find local pets in your area and get leashed today!</h3>
          </Box>
          <img id="img2" src="https://media.giphy.com/media/oDK8A6xUNjD2M/giphy-downsized-large.gif" alt="Good Boi" /> 
          
       
       
      </Container>
    </React.Fragment>


  );
}





export default Home;

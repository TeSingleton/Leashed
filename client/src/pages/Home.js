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
      <Container maxWidth="lg" class="petContainer">
        <Box>
          <h1>Leashed</h1>
        <iframe src="https://giphy.com/embed/yvgaJzI8Q01Ow" width="350" height="420" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dog-eyes-snack-yvgaJzI8Q01Ow"></a></p>
          <h1>Find local pets in your area and get leashed today!</h1>
        </Box>
        
      </Container>
    </React.Fragment>


  );
}





export default Home;

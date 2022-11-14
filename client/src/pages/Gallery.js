import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PETS } from '../utils/queries';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';




// import { QUERY_THOUGHTS } from '../utils/queries';

const Gallery = () => {
  const { loading, data } = useQuery(QUERY_PETS);

  const petList = data?.pets || [];
  console.log(petList)

  return (
    <main>
      <div id="text">
        <h1>Check out our latest members below:</h1>
      </div>
       
              {loading ? (
                <div>Loading...</div>
              ) : (
                <Grid2 container spacing={2} id="portfolio">

                {petList.map(({ _id, name, bio, picture }, index) => (
                  <Grid2  xs="auto">
                    <Card key={index} sx={{ maxWidth: 345 }}>
                      <CardActionArea href={`/pets/${_id}`}>
                        <CardMedia
                          component="img"
                          height="140"
                          image={picture}
                          alt="picture of dog"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {bio}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                         <Button size="small" color="primary">
                              Message
                          </Button>
                      </CardActions>
                    </Card>
                  </Grid2>
                ))}
        
              </Grid2>
           
              )}
              <h2>Ready to create a new matchup?</h2>
              {/* <Link to="/matchup">
                <button className="btn btn-lg btn-danger">Create Matchup!</button>
              </Link> */}
    </main>
  );
};

export default Gallery;

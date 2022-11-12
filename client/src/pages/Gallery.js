import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PET } from '../utils/queries';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';




// import { QUERY_THOUGHTS } from '../utils/queries';

const Gallery = () => {
  const { loading, data } = useQuery(QUERY_PET, {
    fetchPolicy: "no-cache"
  });

  const petList = data?.pets || [];

  return (
    <main>
      <div className="card bg-white card-rounded w-50">
        <div className="card-header bg-dark text-center">
          <h1>Welcome to Leashed!</h1>
        </div>
        <div className="card-body m-5">
          <h2>Our latest furry members:</h2>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <Grid2 container spacing={2} id="portfolio">

                {petList.map(({ id, name, bio, picture }) => (
                  <Grid2 key={id} xs="auto">
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea href='/profile/:profile{id}'>
                        <CardMedia
                          component="img"
                          height="140"
                          image={picture}
                          alt="bloggingtech"
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
            </div>
            <div className="card-footer text-center m-3">
              <h2>Ready to create a new matchup?</h2>
              {/* <Link to="/matchup">
                <button className="btn btn-lg btn-danger">Create Matchup!</button>
              </Link> */}
        </div>
      </div>
    </main>
  );
};

export default Gallery;

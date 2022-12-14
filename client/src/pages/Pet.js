
import { useQuery } from '@apollo/client';
import { QUERY_PET } from '../utils/queries';
import { useParams } from 'react-router-dom';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

const Pet = () => {

  const { petId } = useParams();

  const { loading, data } = useQuery(QUERY_PET, {
    variables: { petId: petId },
  });

  const pet = data?.pet || {};
  console.log(pet)

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container id="petContainer2" maxWidth="sm">

        <h1>{pet.name}</h1>
        <img id="petImage"
          src={pet.picture}
          alt={pet.name}
        />
        <h3>Breed:</h3>
        <p>{pet.breed}</p>
        <h3>Trait:</h3>
        <p>{pet.trait}</p>
        <h3>Bio:</h3>
        <p>{pet.bio}</p>
        <h3>Owner:</h3>
        <p>{pet.owner}</p>

        <Button
          href="/messaging"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Message
        </Button>

      </Container>
    </React.Fragment>
  );

};

export default Pet;

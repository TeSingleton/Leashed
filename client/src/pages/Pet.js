
import { useQuery } from '@apollo/client';
import { QUERY_PET } from '../utils/queries';
import { useParams } from 'react-router-dom';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


// import { QUERY_THOUGHTS } from '../utils/queries';

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
    <Container class="petContainer" maxWidth="sm">
    
      <h1>{pet.name}</h1>
          <img class="petImage"
            src={pet.picture}
            alt={pet.name}
          />
          <p>{pet.breed}</p>
          <p>{pet.trait}</p>
          <p>{pet.bio}</p>
          <p>{pet.owner}</p>

    
    </Container>
  </React.Fragment>
  );

};

export default Pet;

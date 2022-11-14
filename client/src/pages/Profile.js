import React from 'react';
import { useQuery } from '@apollo/client';
import Container from '@mui/material/Container';

import { QUERY_ME } from '../utils/queries';

const Profile = () => {

  // Execute the query on component load
  const { loading, data } = useQuery(QUERY_ME);

  // Use optional chaining to check if data exists and if it has a pets property. If not, return an empty array to use.
  const user = data?.me || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

 

  return (
    <div>
      <div id="profileWords">
        <h1 className="">
          Hello {user.username}!
        </h1>

        <div className="col-12 col-md-10 mb-5">
      
          
        </div>

        <h2>
                  Your Pets:
        </h2>
      </div>

      {user.pets.map((pet) => (
              <div key={pet._id} className="my-2">
               
                <Container id="petContainer2" maxWidth="sm">
    
    <h3>{pet.name}</h3>
        <img id="petImage"
          src={pet.picture}
          alt={pet.name}
        />
        <p>{pet.breed}</p>
        <p>{pet.trait}</p>
        <p>{pet.bio}</p>
        <p>{pet.owner}</p>

        </Container>
              </div>
            ))}
    </div>
  );
};

export default Profile;
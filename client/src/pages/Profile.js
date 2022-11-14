import React from 'react';
import { useQuery } from '@apollo/client';

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

  console.log(user);

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {user.username}' profile.
        </h2>
      </div>
    </div>
  );
};

export default Profile;
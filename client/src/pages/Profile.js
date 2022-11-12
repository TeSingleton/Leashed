import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {

  // Execute the query on component load
  const { loading, data } = useQuery(QUERY_USER);

  // Use optional chaining to check if data exists and if it has a pets property. If not, return an empty array to use.
  const user = data?.username || [];




  // const { username: userParam } = useParams();

  // const { loading, data } = useQuery(QUERY_USER), {
  //   variables: { username: userParam },
  // });



  // const user = data?.user || {};

  
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === useQuery()) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(user)
  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }
console.log(user)
  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {user.username}' profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          {user.username}
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            Something else here
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

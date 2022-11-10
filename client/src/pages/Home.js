import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PET } from '../utils/queries';

// import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
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
                <ul className="square">
                  {petList.map((pet) => {
                    return (
                      <li key={pet._id}>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className="card-footer text-center m-3">
              <h2>Ready to create a new matchup?</h2>
              <Link to="/matchup">
                <button className="btn btn-lg btn-danger">Create Matchup!</button>
              </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;

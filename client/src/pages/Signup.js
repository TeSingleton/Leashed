import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UploadWidget from '../components/UploadWidget';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

// TODO: create formState functions for Pet data (pet, breed, traits, pet bio, pet picture)

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    pet: '', 
    breed: '',
    traits: '',
    bio: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <input 
                  className="form-input"
                  placeholder="Your BFF's Name"
                  name="pet"
                  type="pet"
                  value={formState.pet}
                  onChange={handleChange}
                />
                <input 
                  className="form-input"
                  placeholder="Breed"
                  name="breed"
                  type="breed"
                  value={formState.breed}
                  onChange={handleChange}
                />
                <input 
                  className="form-input"
                  placeholder="Personality traits"
                  name="traits"
                  type="traits"
                  value={formState.traits}
                  onChange={handleChange}
                />
                <input 
                  className="form-input"
                  placeholder="Pet Bio"
                  name="bio"
                  type="bio"
                  value={formState.bio}
                  onChange={handleChange}
                />
                <div className="display-flex">
                  {/* Used for uploading Pet Piccture */}
                  {/* TODO: Deploy application to fix cloudinary bug (Does not run on local server, needs to be deployed) */}
                  {/* TODO: Fetch data after upload to return cloudinary image link as a string to be attached to Pet */}
                  <p>Pet Picture </p><UploadWidget />
                </div>
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;

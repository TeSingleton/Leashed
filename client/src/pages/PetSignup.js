import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UploadWidget from '../components/UploadWidget';

import { useMutation } from '@apollo/client';
import { ADD_PET } from '../utils/mutations';

import Auth from '../utils/auth';

// Pet Signup Form 

const PetSignup = () => {
    const [formState, setFormState] = useState({});
    const [addPet, { error, data }] = useMutation(ADD_PET);
  
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
        const { data } = await addPet({
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
             <h4 className="card-header bg-dark text-light p-2">New Pet Sign Up</h4>
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
                    {/* Used for uploading Pet Picture */}
                  <p>Pet Picture </p><UploadWidget />
                  </div>
                  <button
                    className="btn btn-block btn-primary"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                  Submit Pet
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
  
  console.log(PetSignup);
  
  export default PetSignup;
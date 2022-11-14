import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PET = gql`
  mutation addPet($name: String!, $bio: String!, $breed: String!, $trait: String!, $picture: String!, $owner: String!) {
    addPet(name: $name, bio: $bio, breed: $breed, trait: $trait, picture: $picture, owner: $owner) {
      token
      user {
        _id
        username
      }
    }
  }
`;
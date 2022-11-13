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
  mutation addUser($username: String!, $email: String!, $password: String!, $pet: String!, $breed: String!, $trait: String!, $bio: String!) {
    addUser(username: $username, email: $email, password: $password, pet: $pet, breed: $breed, trait: $trait, bio: $bio) {
      token
      user {
        _id
        username
      }
    }
  }
`;
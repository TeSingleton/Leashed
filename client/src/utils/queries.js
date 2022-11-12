import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      pets{
            _id
            name
            bio
            breed
            trait
            owner
            picture}
    }
  }
`;

export const QUERY_PET = gql`
  query pet {
    pets {
      _id
      name
      bio
      breed
      trait
      owner
      picture
      }
    }
  `;

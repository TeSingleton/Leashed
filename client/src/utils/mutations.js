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
  mutation addPet($name: String!, $bio: String!, $breed: String!, $traits: String!, $picture: String!) {
    addPet(name: $name, bio: $bio, breed: $breed, traits: $traits, picture: $picture) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($messageText: String!, $messageAuthor: String!) {
    sendMessage(messageText: $messageText, messageAuthor: $messageAuthor) {
      _id
      messageText
      messageAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
      }
    }
  }
`;

export const SEND_COMMENT= gql`
  mutation sendComment($messageId: ID!, $commentText: String!, $commentAuthor: String!) {
    sendComment(messageId: $messageId, commentText: $commentText, commentAuthor: $commentAuthor) {
      _id
      messageText
      messageAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

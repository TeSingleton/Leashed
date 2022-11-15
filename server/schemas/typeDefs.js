const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    pets: [Pet]
    message: [Message]
  }

  
  type Pet {
    _id: ID
    name: String
    bio: String
    breed: String
    trait: String
    picture: String
    owner: String
  }


  type Message {
    _id: ID
    messageText: String
    messageAuthor: String
    createdAt: String!
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(username: String!): User
    me: User
    pets: [Pet]
    pet(petId: ID!): Pet
    messages: [Message]!
    message(messageId: ID): Message
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addPet(username: String!, email: String!, password: String!, name: String!, breed: String!, traits: String!, bio: String!, picture: String!): Pet
    login(email: String!, password: String!): Auth
    sendMessage(messageText: String!, messageAuthor: String!): Message
    sendComment(messageId: ID!, commentText: String!, commentAuthor: String!): Message
    removeMessage(messageId: ID!): Message
    removeComment(messageId: ID!, commentId: ID!): Message
  }
`;

module.exports = typeDefs;

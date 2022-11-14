const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    pets: [Pet]
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

  type Timeline {
    _id: ID,
    name: String
    description: String
    startDate: String
    endDate: String
    isPresent: Boolean
  }

  input TimelineInput {
    name: String!
    description: String
    startDate: String!
    endDate: String
    isPresent: Boolean
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
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addPet(username: String!, email: String!, password: String!, name: String!, breed: String!, traits: String!, bio: String!, picture: String!): Pet
    login(email: String!, password: String!): Auth
    addTimeline(entry: TimelineInput): Timeline
  }
`;

module.exports = typeDefs;

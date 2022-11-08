const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    timeline: [Timeline]
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
    # users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTimeline(entry: TimelineInput): Timeline
  }
`;

module.exports = typeDefs;

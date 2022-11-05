const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    humanProfilePicture: String!
    pets: [Pet]
  }

  type Pet {
    _id: ID!
    name: String!
    bio: String!
    petId: ID
  }

  type Query {
   user: User
  }

#   type Mutation {
    
#   }
`;

module.exports = typeDefs;

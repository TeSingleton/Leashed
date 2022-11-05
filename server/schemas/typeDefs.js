const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    humanProfilePicture: String
    pet: Pet
  }
  type Pet {
    _id: ID
    name: String
    bio: String
    breed: String
    trait: String
    owner: String
  }
  type Query {
   users: [User]
  }
#   type Mutation {
    
#   }
`;

module.exports = typeDefs;
const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("pet");
    },
  },
};

module.exports = resolvers;

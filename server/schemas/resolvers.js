const { AuthenticationError } = require('apollo-server-express');
const { User, Pet} = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // users: async () => {
    //   return User.find().select("-password");
    // },
    user: async (parent, { username }) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }
      return User.findOne({ username }).populate("pets").select("-password");
    },
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      return await User.findOne({ _id: context.user._id })
              .populate('pets')
              .select("-password")
    },
    pets: async () => {
      return await Pet.find();
    // pet: async (parent, args, context) => {
    //   if (!context.user) {
    //     // throw new AuthenticationError('You need to be logged in!');
    //   }
    //   console.log("here");

    //   return await Pet.findOne({ name: args.name })
    // }
    },

    pet: async (parent, { petId }) => {
      return Pet.findOne({ _id: petId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addPet: async (parent, { name, bio, breed, trait, picture, owner }) => {
      // if(!user) {
      //   throw new AuthenticationError('Must be logged in to create pet entries');
      // }

      const pet = await Pet.create({ ...entry });

      await User.findOneAndUpdate({ _id: user._id }, { $addToSet: { pets: pet._id } });

      return pet;
    },
  },
};

module.exports = resolvers;

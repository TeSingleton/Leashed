const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Pet, Message} = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // users: async (_, _, {user}) => {
    //   if (!context.user) {
    //     throw new AuthenticationError('You need to be logged in!');
    //   }
    //   let users= await User.findAll({
    //     where: {username: {[Op.ne]: user.username},}
    //   })

    //   // const allUserMessages = await Message.findAll({
    //   //   where: {
    //   //     [Op.or]: [{ from: user.username}, { to: user.username }]
    //   //   },
    //   //   order: [['createdAt', 'DESC']]
    //   // })
    //   // users = users.map(otherUser => {
    //   //   const latestMessage = allUserMessages.find(
    //   //     (m) => m.from === otherUser.username || m.to === otherUser.username
    //   //   )
    //   //   otherUser.latestMessage = latestMessage
    //   //   return otherUser
    //   // })
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
              .populate('message')
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

    messages: async () => {
      return Message.find().sort({creadetAt: -1});
    },
    message: async (parent, { messageId }) => {
      return Message.findOne({ _id: messageId });
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
    sendMessage: async (parent, { messageText, messageAuthor }) => {
      return Message.create({ messageText, messageAuthor });
    },
    sendComment: async (parent, { messageId, commentText, commentAuthor}) => {
      return Message.findOneAndUpdate(
        { _id: messageId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeMessage: async (parent, { messageId }) => {
      return Message.findOneAndDelete({ _id: messageId });
    },
    removeComment: async (parent, { messageId, commentId }) => {
      return Message.findOneAndUpdate(
        { _id: messageId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
      
  },
};

module.exports = resolvers;

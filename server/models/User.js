const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const messageSchema = require('./Message');
const petSchema = require('./Pet');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    humanProfilePicture: {
      type: Image,
      required: true,
    },
    // saving messages to a specific user
    messages: [messageSchema],
    // saving pet(s) to a specific user
    pets: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Pet',
      },
    ],
  },
  // set to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
});

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `messageCount` with the number of saved messages that user has (SEE ACTIVITY 21 - O2 - DEVELOP - MODELS)
userSchema.virtual('messageCount').get(function () {
  return this.savedMessages.length;
});

const User = model('User', userSchema);

module.exports = User;

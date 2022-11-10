const { Schema, model } = require('mongoose');

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: false
    },
    trait: {
      type: String,
      required: false
    },
    picture: {
      type: String,
      required: true
    },
    owner: {
      type: String,
      required: true
    }
  },
);

const Pet = model('Pet', petSchema);

module.exports = Pet;
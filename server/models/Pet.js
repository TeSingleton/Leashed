const { Schema, model } = require('mongoose');
const traitSchema = require('./Trait');
const breedSchema = require('./Breed');


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
    petId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    // TODO: Breed
    // TODO: Trait
    // TODO: Owner (user)

    // associating traits from the available array to the pet
    traits: [traitSchema],

    // associating a breed from the available array to the pet
    breed: [breedSchema],
  },
);

const Pet = model('Pet', petSchema);

module.exports = Pet;

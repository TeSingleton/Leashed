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
    petId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    // TODO: Breed
    // TODO: Trait
    // TODO: Owner (user)


  },
);

const Pet = model('Pet', petSchema);

module.exports = Pet;

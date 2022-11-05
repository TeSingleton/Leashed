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


  },
);

const Pet = model('Pet', petSchema);

module.exports = Pet;

const db = require('../config/connection');
const { User, Pet, Message} = require('../models');
const userSeeds = require('./userSeeds.json');
const petSeeds = require('./petSeeds.json')
const messageSeeds = require('./messageSeeds.json')


db.once('open', async () => {
  try {
    await Pet.deleteMany({});
    await User.deleteMany({});
    await Message.deleteMany({});

   
    await User.create(userSeeds);
    await Pet.create(petSeeds);
    await Message.create(messageSeeds);


    // for (let i = 0; i < thoughtSeeds.length; i++) {
    //   const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: thoughtAuthor },
    //     {
    //       $addToSet: {
    //         thoughts: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});

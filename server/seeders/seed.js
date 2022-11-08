const db = require('../config/connection');
const { User, Timeline } = require('../models');
const userSeeds = require('./userSeeds.json');
const timelineSeeds = require('./timelineSeeds.json');

db.once('open', async () => {
  try {
    await Timeline.deleteMany({});
    await User.deleteMany({});

    await Timeline.create(timelineSeeds);
    await User.create(userSeeds);

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

const db = require('../config/connection');
const { Tech } = require('../models');

<<<<<<< HEAD
const userData = require('./userData');
=======
const techData = require('./techData.json');
>>>>>>> 66992c9ebd911e62442956b7e01889e598871690

db.once('open', async () => {
  await Tech.deleteMany({});

  const technologies = await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});

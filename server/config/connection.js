const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://127.0.0.1:27017/leashed_DB' ||  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;

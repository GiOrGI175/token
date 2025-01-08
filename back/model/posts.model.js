const { default: mongoose, Types } = require('mongoose');

const postsScema = new mongoose.Schema({
  title: String,
  constent: String,

  users: { type: [mongoose.Schema.Types.ObjectId], ref: 'users' },
});

module.exports = mongoose.model('users', postsScema);

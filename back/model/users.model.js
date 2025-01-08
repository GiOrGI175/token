const { default: mongoose, Types } = require('mongoose');

const userShema = new mongoose.Schema({
  firsName: {
    Type: String,
  },

  posts: { type: [mongoose.Schema.Types.ObjectId], ref: 'post', default: [] },
});

module.exports = mongoose.model('users', userShema);

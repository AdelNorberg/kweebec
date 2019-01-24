const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    default: null
  },
  date: {
    type: Date,
    default: Date.now
  },
  balance: {
    diamond: {
      type: Number,
      default: 5
    },
    coin: {
      type: Number,
      default: 100
    }
  },
  lvl: {
    type: Number
  },
  friends: {
    nickname: {
      type: [Number]
    },
    urlAvatar: {
      type: String
    }
  },
  groups: {
    type: [Number],
    default: []
  },
  notifications: {
    type: [Number],
    default: []
  }
});

module.exports = mongoose.model("User", userSchema);

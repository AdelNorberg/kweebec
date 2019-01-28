const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friend = {
  url: {
    type: String
  },
  nickname: {
    type: String
  },
  status: {
    type: Number
  }
};

const group = {
  url: {
    type: String
  },
  nickname: {
    type: String
  },
  people: [Array]
};

const notification = {
  url: {
    type: String
  },
  nickname: {
    type: String
  },
  header: {
    type: String
  },
  description: {
    type: String
  }
};

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
    default: ""
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
    type: Number,
    default: 1
  },
  friends: {
    type: [friend],
    default: []
  },
  groups: {
    type: [group],
    default: []
  },
  notifications: {
    type: [notification],
    default: []
  }
});

module.exports = mongoose.model("User", userSchema);

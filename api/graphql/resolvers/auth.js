const bcrypt = require("bcryptjs");
const User = require("../../models/user");

module.exports = {
  logout: async (args, req) => {
    req.session.destroy();
    return true;
  },
  isLogin: async (args, req) =>
    req.session.userID !== undefined ? true : false,
  signup: async (args, req) => {
    try {
      const existingUser = await User.findOne({ email: args.email });
      if (existingUser) {
        throw new Error("User exists already.");
      }

      const hashedPassword = await bcrypt.hash(args.password, 12);

      const user = new User({
        email: args.email,
        password: hashedPassword
      });

      await user.save();

      req.session.userID = {
        ...user._doc._id
      };

      return user;
    } catch (err) {
      throw err;
    }
  },
  login: async ({ email, password }, req) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("User does not exist!");
    }
    if (user) {
      if (await bcrypt.compareSync(password, user.password)) {
        req.session.userID = user._doc._id;

        return { ...user._doc };
      }

      throw new Error("Incorrect password.");
    }

    throw new Error("No Such User exists.");
  }
};

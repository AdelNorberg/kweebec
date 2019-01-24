const bcrypt = require("bcryptjs");
const User = require("../../models/user");
const session = require("express-session");
const ms = require("ms");
const app = require("express")();

// session middleware
app.use(
  session({
    name: "qid",
    secret: `some-random-secret-here`,
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: ms("1d")
    }
  })
);

module.exports = {
  isLogin: (args, req) => typeof req.session.user !== "undefined",
  signup: async args => {
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

      req.session.user = {
        ...user
      };

      return true;
    } catch (err) {
      throw err;
    }
  },
  login: async ({ email, password }, req) => {
    const user = await User.findOne({ email: email });
    console.log(email + password);
    if (!user) {
      throw new Error("User does not exist!");
    }
    if (user) {
      if (await bcrypt.compareSync(password, user.password)) {
        req.session.user = {
          ...user
        };
        return { userId: user._id };
      }

      throw new Error("Incorrect password.");
    }

    throw new Error("No Such User exists.");
  }
};

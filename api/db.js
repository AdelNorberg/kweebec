const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const ms = require("ms");

module.exports = app => {
  //Подключение к Mongodb
  mongoose
    .connect(
      `mongodb+srv://AdelNorberg:gWuN6ZKxA46tpL3y@cluster0-imrnn.mongodb.net/test?retryWrites=true`,
      { useNewUrlParser: true }
    )
    .then(() => {
      console.log("Все ок:) Connect с mongodb произошел");
    })
    .catch(err => {
      console.log(err);
    });

  //Сессии
  const store = new MongoDBStore({
    uri:
      "mongodb+srv://AdelNorberg:gWuN6ZKxA46tpL3y@cluster0-imrnn.mongodb.net/session?retryWrites=true",
    collection: "mySessions"
  });

  store.on("error", function(error) {
    console.log(error);
  });

  // session middleware
  app.use(
    session({
      store,
      name: "sid",
      secret: `some-random-secret-here`,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.NODE_ENV === "production",
        sameSite: true,
        maxAge: ms("1d")
      }
    })
  );
};

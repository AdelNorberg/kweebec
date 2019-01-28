const User = require("./models/user");

module.exports = io => {
  io.on("connection", async socket => {
    socket.on("chat", async data => {
      io.sockets.emit("chat", data);
    });

    socket.on("typing", async data => {
      socket.broadcast.emit("typing", data);
    });

    socket.on("notification", async () => {});

    socket.on("friends", async () => {});

    socket.on("lvl", async () => {});

    socket.on("balance", async () => {});

    socket.on("groups", async () => {});

    console.log("made socket connection", socket.id);
  });
};

const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const server = require("http").Server(app);
const io = require("socket.io")(server);

require("./db");
require("./graphql");

//socketIO
io.on("connection", socket => {
  socket.emit("news", { hello: "world" });
  socket.on("my other event", data => {
    console.log(data);
  });
});

//Настройка сервера
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Включение сервера
const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);

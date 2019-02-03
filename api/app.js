const express = require("express");
const bodyParser = require("body-parser");
//const socket = require("socket.io");
const cors = require("cors");
const path = require("path");

const app = express();
app.listen(3000, () => {
  console.log("App запущено на 3000");
});

// Socket setup
//const io = socket(server);

//Sessions and API
require("./db")(app);
require("./graphql")(app);
//require("./socket")(io);

//Настройка сервера
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

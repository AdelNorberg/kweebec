const app = require("express")();
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const ms = require("ms");
// const socket = require('socket.io');

const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolvers/index");

//Настройка сервера
app.use(bodyParser.json());
app.use(cors());

//graphql api
app.use(
  "/graphql",
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

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

//Включение сервера
const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);

//Socket setup
// const io = socket(server);

// io.on('connection', (socket) => {
//   console.log('soket enabled')
// });

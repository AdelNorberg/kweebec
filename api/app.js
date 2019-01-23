const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const cors = require('cors');
const mongoose = require('mongoose');
// const socket = require('socket.io');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');
const isAuth = require('./middleware/is-auth');

const app = express();

//Настройка сервера
app.use(bodyParser.json());
app.use(isAuth); 
app.use(cors())

//graphql api
app.use(
  '/graphql',
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
    console.log('Все ок:) Connect с mongodb произошел')
  })
  .catch(err => {
    console.log(err);
  });
  
//Включение сервера
app.listen(3000, () => {
  console.log('Сервер включен')
});

//Socket setup
// const io = socket(server);

// io.on('connection', (socket) => {
//   console.log('soket enabled')
// });
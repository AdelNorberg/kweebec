const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const cors = require('cors');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');
const isAuth = require('./middleware/is-auth');

const app = express();

app.use(bodyParser.json());
app.use(isAuth); 
app.use(cors())
app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

mongoose
  .connect(
    `mongodb+srv://AdelNorberg:gWuN6ZKxA46tpL3y@cluster0-imrnn.mongodb.net/test?retryWrites=true`,
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(3000);
    console.log('Проверка связи')
  })
  .catch(err => {
    console.log(err);
  });


app.listen((app.get('port'), () => {
  console.log(`Express запущено в режиме ${app.get('env')}`);
}));

app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('это тест');
});
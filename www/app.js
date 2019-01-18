const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');
const isAuth = require('./middleware/is-auth');

const app = express();

app.use(bodyParser.json());

app.use(isAuth);

app.disable('x-powered-by');

switch(app.get('env')){
  case 'development':
    // сжатое многоцветное журналирование для
    // разработки
    app.use(require('morgan')('dev'));
    break;
  case 'production':
    // модуль 'express-logger' поддерживает ежедневное
    // чередование файлов журналов
    app.use(require('express-logger')({
    path: __dirname + '/log/requests.log'
    }));
  break;
 }

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

// mongoose
//   .connect(
//     `mongodb://mongo:27017/kweebec`,
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//     app.listen(3000);
//     console.log('Проверка связи')
//   })
//   .catch(err => {
//     console.log(err);
//   });

app.listen((app.get('port'), () => {
  console.log(`Express запущено в режиме ${app.get('env')}
      на http://localhost:3000`);
}));

app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('это тест');
});
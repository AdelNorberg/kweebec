const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type AuthData {
  userId: ID!
}

type Result {
  id: String
}

type RootQuery {
  isLogin: Boolean!
}

type RootMutation {
  signup(email: String!, password: String!): AuthData!
  login(email: String!, password: String!): AuthData!
}

type Subscription {
  somethingChanged: Result
}

schema {
  query: RootQuery
  mutation: RootMutation
  subscription: Subscription
}
`);

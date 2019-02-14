const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Balance {
  diamond: Int!
  coin: Int!
}

type Friend {
  url: String!
  nickname: String!
  status: Int!
}

type AuthData {
  email: String!
  balance: Balance!
  nickname: String!
  friends: [Friend]!
  groups: [String]!
  notifications: [String]!
}

type RootQuery {
  isLogin: Boolean!
  logout: Boolean!
}

type RootMutation {
  signup(email: String!, password: String!): AuthData!
  login(email: String!, password: String!): AuthData!
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);

import { buildSchema } from "graphql";

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    Success: Boolean!
  }

  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`);

export default schema;

import { buildSchema } from "graphql";

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    Success: Boolean!
  }
type UserResponse{
name:String!
message:String!
Success:Boolean!
}

  type Query {
    getUser(id: ID!): User
    allUsers:[User!]
  }
  
  type Mutation {
    createUser(name: String!, email: String!): User
    updateUser(id: ID!, name: String, email: String): UserResponse
    deleteUser(id:ID!):UserResponse
  }
`);

export default schema;

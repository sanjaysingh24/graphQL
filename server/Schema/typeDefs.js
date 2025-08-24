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

type Product{
name:String!,
price:Int!
Description:String

}

type ProductResponse{
name:String,
message:String,
Success:Boolean!
}


  type Query {
    getUser(id: ID!): User
    allUsers:[User!]
  }
  
  type Mutation {
    createUser(name: String!, email: String!): UserResponse
    updateUser(id: ID!, name: String, email: String): UserResponse
    deleteUser(id:ID!):UserResponse
    addproduct(name:String!,price:Int!,description:String):ProductResponse
  }
`);

export default schema;

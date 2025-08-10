// index.js
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connectDb } from "./config/db.js";

const typeDefs =`
type User{
  id:ID!
  name:String!
  email:String!
}
  type Query {
    getuser: [User]
  }

type Mutation{
createUser(name:String!,email:String!):User
}
`;

const resolvers = {
  Query: {
    getuser: () => users
  }
};
connectDb();
const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 3000 },
});

console.log(`🚀 Server ready at ${url}`);

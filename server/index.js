// index.js
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connectDb } from "./config/db.js";
import { typeDefs } from "./Schema/typeDefs.js";
import { resolvers } from "./Schema/resolver.js";



connectDb();
const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 3000 },
});

console.log(`🚀 Server ready at ${url}`);

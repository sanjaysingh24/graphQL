import express from "express";
import cors from "cors";
import { createHandler } from "graphql-http/lib/use/express";

import { connectDb } from "./config/db.js";
import schema from "./Schema/typeDefs.js";
import { resolvers } from "./Schema/resolver.js";
const port = 3000;
connectDb();

// GraphQL Schema



const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// GraphQL endpoint
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: resolvers,
    graphiql: true, // built-in GraphiQL IDE
  })
);

app.listen(port, () => {
  console.log("🚀 Server ready at http://localhost:4000/graphql");
});

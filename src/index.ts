import { config } from "dotenv";
config();
import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import schema from "./models/schema";
import resolvers from "./resolvers/resolver";

const app = express();
app.use(cors());

app.use(
  "/graphiql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: resolvers,
  })
);

app.get("/", (req, res) => res.send("It Works"));

app.listen(4000, () => console.log("Server running at port : 4000"));

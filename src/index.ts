import { config } from "dotenv";
config();
import express from "express";
import { Db, MongoError } from "mongodb";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const app = express();
const router = express.Router();

import connect from "./db/connect";

const schema = buildSchema(`
  type Query {
    name: String
  }
`);

const rootValue = {
  name: () => {
    return "Episode I: The Phantom Menace";
  },
};

router.use(
  "/graphiql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue,
  })
);

router.get("/", (req, res) => res.send("It Works"));
router.get("/mongo", () => {
  connect((dbo: Db, dberr: MongoError) => {
    if (dberr) {
      console.log(dberr);
    }
  });
});
app.use("/", router);

app.listen(4000, () => console.log("Server running at port : 4000"));

import { MongoClient } from "mongodb";

const state = {
  db: null as any,
};
const mongoURI = process.env.MONGO_URI as string;
const mongoDb = process.env.MONGO_DB as string;

const connect = (connection: any) => {
  if (state.db) {
    connection(state.db, null);
  } else {
    MongoClient.connect(mongoURI)
      .then((db) => {
        if (!db) {
          connection(null, db);
        } else {
          state.db = db.db(mongoDb);
          connection(state.db, null);
        }
      })
      .catch((err) => {
        connection(null, err);
      });
  }
};

export default connect;

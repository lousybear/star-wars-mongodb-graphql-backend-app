import connect from "../db/connect";
import { Db, MongoError } from "mongodb";

let mongoDb: Db;

connect((dbo: Db, dberr: MongoError) => {
  if (!dberr) {
    mongoDb = dbo;
  }
});

const resolvers = {
  movies: () => {
    return mongoDb.collection("star_wars").find({}).toArray();
  },

  movieByName: (args: any) => {
    return mongoDb.collection("star_wars").findOne({ name: args.name });
  },

  addMovie: (args: any) => {
    const movie = {
      name: args.name,
      genre: args.genre,
      year: args.year,
    };
    mongoDb.collection("star_wars").insertOne(movie);
    return movie;
  },
};

export default resolvers;

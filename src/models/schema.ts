import { buildSchema } from "graphql";

const movieSchema = buildSchema(`
  type Query {
    movies: [Movie]
    movieByName(name: String!): Movie
  }

  type Mutation {
    addMovie (name: String!, genre: String!, year: String!, image: String!): Movie
  }

  type Movie {
    _id: String
    name: String
    genre: String
    year: String
    image: String
  }
`);

export default movieSchema;

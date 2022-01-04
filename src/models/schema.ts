import { buildSchema } from "graphql";

const movieSchema = buildSchema(`
  type Query {
    movies: [Movie]
  }

  type Mutation {
    addMovie (name: String!, genre: String!, year: String!): Movie
  }

  type Movie {
    name: String
    genre: String
    year: String
  }
`);

export default movieSchema;
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Media {
    title: String
    year: Int
  }

  type Query {
    getMedia: [Media]
  }
`

const media = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    year: 2002,
  },
  {
    title: 'Jurassic Park',
    year: 1993,
  },
];

const resolvers = {
  Query: {
    getMedia: () => media,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
import { ApolloServer } from 'apollo-server';

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
    media: () => media,
  },
};

const server = new ApolloServer({
  typeDefs: 'schema.graphql',
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
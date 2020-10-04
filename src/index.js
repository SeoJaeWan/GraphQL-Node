const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Link = require("./resolvers/Link");
const Subscription = require("./resolvers/Subscription");
const Vote = require("./resolvers/Vote");

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
  Subscription,
  Vote,
};

const server = new GraphQLServer({
  typeDefs: "./src/lib/schema.graphql",
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma,
    };
  },
});

server.start(() => console.log(`http://localhost:4000에서 서버 가동중!`));

import '@babel/polyfill';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './graphql/schemas/schema';
import resolvers from './graphql/resolvers/resolvers';
import models from './models';
import configurations from './config/config';
import cors from 'cors';
import http from 'http';

const environment = process.env.NODE_ENV || 'test'; // Change this Jessie
const config = configurations[environment];

const apollo = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { models }
});

const app = express();
app.use(cors());

apollo.applyMiddleware({ app });

var server;
if (config.ssl) {
  console.log(
    'SSL not yet supported. Please refer to this link: https://www.apollographql.com/docs/apollo-server/essentials/server'
  );
} else {
  server = http.createServer(app);
}

models.sequelize
  .sync()
  .then(res => {
    server.listen({ port: config.port, ip: config.ip}, () => {
      console.log(
        '🚀  Server ready at',
        `http${config.ssl ? 's' : ''}://${process.env.DB_HOST_TEST}:${config.port}${
          apollo.graphqlPath
        }`
      );
    });
  })
  .catch(err => {
    console.log('Failed to run the server: ' + err);
  });

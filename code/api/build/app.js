'use strict';

require('@babel/polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _schema = require('./graphql/schemas/schema');

var _schema2 = _interopRequireDefault(_schema);

var _resolvers = require('./graphql/resolvers/resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

var _models = require('./models');

var _models2 = _interopRequireDefault(_models);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var environment = process.env.NODE_ENV || process.env.PORT || 'test'; // Change this Jessie
var config = _config2.default[environment];

var apollo = new _apolloServerExpress.ApolloServer({
  typeDefs: (0, _apolloServerExpress.gql)(_schema2.default),
  resolvers: _resolvers2.default,
  context: { models: _models2.default }
});

var app = (0, _express2.default)();
app.use((0, _cors2.default)());

apollo.applyMiddleware({ app: app });

var server;
if (config.ssl) {
  console.log('SSL not yet supported. Please refer to this link: https://www.apollographql.com/docs/apollo-server/essentials/server');
} else {
  server = _http2.default.createServer(app);
}

_models2.default.sequelize.sync().then(function (res) {
  server.listen({ port: config.port }, function () {
    console.log('🚀  Server ready at', 'http' + (config.ssl ? 's' : '') + '://' + config.hostname + ':' + config.port + apollo.graphqlPath);
  });
}).catch(function (err) {
  console.log('Failed to run the server: ' + err);
});
require('dotenv').config({ path: '../.env' });

module.exports = {
  development: {
    ssl: false,
    port: process.env.PORT || 4000,
    hostname: 'kaagapai-dev.com'
  },
  test: {
    ssl: false,
    port: process.env.PORT || 4000,
    hostname: 'kaagapai-test.com'
  },
  production: {
    ssl: false,
    port: process.env.PORT || 4000,
    hostname: process.env.HOST_PROD
  }
};

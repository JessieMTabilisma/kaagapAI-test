const dotenv = require('dotenv').config();

module.exports = {
  development: {
    ssl: false,
    port: process.env.PORT || 4000,
    hostname: process.env.DB_HOST_DEV
  },
  test: {
    ssl: false,
    port: process.env.PORT || 4000,
    hostname: 'kaagapai.com'
  },
  production: {
    ssl: false,
    port: process.env.PORT || 4000,
    hostname: process.env.DB_HOST_PROD
  }
};

'use strict';

var dotenv = require('dotenv').config();
require('babel-register')({
  presets: ['env']
});

module.exports = {
  development: {
    ssl: false,
    port: process.env.PORT || 4000,
    hostname: process.env.DB_HOST_DEV
  },
  test: {
    ssl: false,
    port: process.env.PORT || 4000,
    hostname: process.env.DB_HOST_TEST,
    ip: '0.0.0.0'
  },
  production: {
    ssl: false,
    port: process.env.PORT || 4000,
    hostname: process.env.DB_HOST_PROD
  }
};
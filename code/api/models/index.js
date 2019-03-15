const dotenv = require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME_PROD,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD_PROD,
  {
    dialect: 'mysql',
    host: process.env.DB_HOST_PROD,
    port: process.env.DB_PORT,
    operatorsAliases: false,
    logging: false
  }
);

const models = {
  Practitioner: sequelize.import('./practitioner'),
  Client: sequelize.import('./client'),
  Session: sequelize.import('./session'),
  Session_Document: sequelize.import('./session_document'),
  Practitioner_Feedback: sequelize.import('./practitioner_feedback')
};

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;

'use strict';

module.exports = function (sequelize, DataTypes) {
  var Session = sequelize.define('Session', {
    session_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    session_name: DataTypes.STRING,
    date_of_session: DataTypes.DATE,
    archive_status: {
      type: DataTypes.ENUM('archived', 'active'),
      defaultValue: 'active'
    }
  });

  Session.associate = function (models) {
    Session.belongsTo(models.Client, {
      foreignKey: 'c_id',
      targetKey: 'c_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    Session.hasMany(models.Session_Document, {
      foreignKey: 'session_id',
      sourceKey: 'session_id'
    });
  };

  return Session;
};
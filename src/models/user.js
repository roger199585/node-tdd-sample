'use strict';

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    fbid: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
      }
    }
  })

  return User
}

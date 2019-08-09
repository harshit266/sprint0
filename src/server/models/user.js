'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    designation: DataTypes.STRING,
    email: DataTypes.STRING,
    signup: DataTypes.STRING,
    moduleName: DataTypes.STRING,
    permissionName: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
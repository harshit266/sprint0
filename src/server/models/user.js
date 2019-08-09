'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    email: DataTypes.STRING,
    designation: DataTypes.STRING,
    signup: DataTypes.STRING,
    moduleName: DataTypes.STRING,
    permissionName: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
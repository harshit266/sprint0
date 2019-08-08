'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    designation: DataTypes.STRING,
    signup: DataTypes.STRING,
    module_name: DataTypes.STRING,
    permission_name: DataTypes.STRING
    
  });

  User.associate = function(models) {
    // models.User.hasMany(models.Task);
  };

  return User;
};
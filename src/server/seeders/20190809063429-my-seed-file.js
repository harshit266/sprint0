'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Users', [{
        name: 'John Doe',
        email:"harshit266@gmail.com",
        designation: 'head',
        signup:"Linkedin",
        moduleName:"a",
        permissionName:"s"
        
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Users', null, {});
    
  }
};

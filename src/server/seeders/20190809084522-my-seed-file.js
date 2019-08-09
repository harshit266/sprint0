'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
     return queryInterface.bulkInsert('Users', [{
        first_name: 'John Doe',
        email:'harshit266@gmail.com',
        designation:'head',
        signup:'Linkedin',
        moduleName:'a',
        permissionName:'d',
        createdAt:'1/06/2019',
        updatedAt:'1/6/2019'
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Users', null, {});
  }
};

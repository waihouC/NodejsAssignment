'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('authors', [
      { id: 1, name: 'Cory Jones', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Fred Anderson', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Jack Klein', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'Salma Brennan', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, name: 'Ayla Price', createdAt: new Date(), updatedAt: new Date() },
      { id: 6, name: 'Jodie Wallace', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('authors', null, {});
  }
};

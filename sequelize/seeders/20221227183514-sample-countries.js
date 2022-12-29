'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('countries', [
      { id: 1, code: 'SG', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, code: 'MY', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, code: 'US', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('countries', null, {});
  }
};

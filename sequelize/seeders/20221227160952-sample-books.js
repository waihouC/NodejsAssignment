'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      { id: 1, name: 'East of Eden', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'The Sun Also Rises', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Pride and Prejudice', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'Are You There', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, name: 'Brave New World', createdAt: new Date(), updatedAt: new Date() },
      { id: 6, name: 'Bury My Heart', createdAt: new Date(), updatedAt: new Date() },
      { id: 7, name: 'Mask of Silence', createdAt: new Date(), updatedAt: new Date() },
      { id: 8, name: 'Destiny', createdAt: new Date(), updatedAt: new Date() },
      { id: 9, name: 'Into the Dragon', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};

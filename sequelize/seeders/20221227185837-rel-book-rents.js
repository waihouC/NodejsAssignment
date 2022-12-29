'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('book_rents', [
      { person_id: 1, book_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 1, book_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 1, book_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 1, book_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 1, book_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 2, book_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 2, book_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 2, book_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 2, book_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 3, book_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 3, book_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 3, book_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 4, book_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 6, book_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 6, book_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 7, book_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 7, book_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 7, book_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 8, book_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { person_id: 9, book_id: 1, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('book_rents', null, {});
  }
};

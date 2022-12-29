'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('author_books', [
      { author_id: 6, book_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { author_id: 5, book_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { author_id: 4, book_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { author_id: 3, book_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { author_id: 2, book_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { author_id: 1, book_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { author_id: 2, book_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { author_id: 4, book_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { author_id: 6, book_id: 9, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('author_books', null, {});
  }
};

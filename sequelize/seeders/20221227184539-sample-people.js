'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('people', [
      { id: 1, name: 'Ali Md', country_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Xiao Ming', country_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Ravi M', country_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'Zoe Mak', country_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 5, name: 'Kathy K', country_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 6, name: 'Abdul Md', country_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 7, name: 'Le Le', country_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 8, name: 'Muthu R', country_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 9, name: 'Tristan Tan', country_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 10, name: 'Adam A', country_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 11, name: 'Calvin Owens', country_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { id: 12, name: 'Jon Rodgers', country_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { id: 13, name: 'Luis Mendez', country_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { id: 14, name: 'Jessie J', country_id: 3, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('people', null, {});
  }
};

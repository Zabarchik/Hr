'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CandidatesStages', [
    { candidateId: 1, stageId: 1, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 2, stageId: 1, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 3, stageId: 1, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 4, stageId: 1, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 5, stageId: 1, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 6, stageId: 1, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 7, stageId: 1, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 8, stageId: 1, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 9, stageId: 1, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 10, stageId: 1, createdAt: new Date(), updatedAt: new Date() },

      // Кандидаты 11-15: Прошли до Звонка (стадии 1, 2, 3)
      { candidateId: 11, stageId: 2, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 11, stageId: 3, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 12, stageId: 3, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 13, stageId: 3, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 14, stageId: 3, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 15, stageId: 3, createdAt: new Date(), updatedAt: new Date() },

      // Кандидаты 16-20: Интервью (стадия 4)
      { candidateId: 16, stageId: 4, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 17, stageId: 4, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 18, stageId: 4, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 19, stageId: 4, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 20, stageId: 4, createdAt: new Date(), updatedAt: new Date() },

      // Кандидаты 21-25: Отказ (стадия 7)
      { candidateId: 21, stageId: 7, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 22, stageId: 7, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 23, stageId: 7, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 24, stageId: 7, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 25, stageId: 7, createdAt: new Date(), updatedAt: new Date() },

      // Кандидаты 26-28: Оффер (стадия 5)
      { candidateId: 26, stageId: 5, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 27, stageId: 5, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 28, stageId: 5, createdAt: new Date(), updatedAt: new Date() },

      // Кандидаты 29-30: В штате (стадия 6)
      { candidateId: 29, stageId: 6, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 30, stageId: 6, createdAt: new Date(), updatedAt: new Date() }
    ], {});
 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

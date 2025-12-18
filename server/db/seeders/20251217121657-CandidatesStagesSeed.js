'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CandidatesStages', [
      // 10 кандидатов: только стадия 1 (ID 1-10)
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

      // 5 кандидатов: дошли до стадии 2 (ID 11-15)
      { candidateId: 11, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 11, stageId: 2, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 12, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 12, stageId: 2, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 13, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 13, stageId: 2, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 14, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 14, stageId: 2, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 15, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 15, stageId: 2, createdAt: new Date(), updatedAt: new Date() },

      // 4 кандидата: дошли до стадии 3 (ID 16-19)
      { candidateId: 16, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 16, stageId: 2, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 16, stageId: 3, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 17, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 17, stageId: 2, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 17, stageId: 3, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 18, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 18, stageId: 2, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 18, stageId: 3, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 19, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 19, stageId: 2, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 19, stageId: 3, createdAt: new Date(), updatedAt: new Date() },

      // 6 кандидатов: дошли до стадии 4 (ID 20-25)
      { candidateId: 20, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 20, stageId: 2, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 20, stageId: 3, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 20, stageId: 4, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 21, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 21, stageId: 2, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 21, stageId: 3, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 21, stageId: 4, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 22, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 22, stageId: 2, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 22, stageId: 3, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 22, stageId: 4, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 23, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 23, stageId: 2, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 23, stageId: 3, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 23, stageId: 4, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 24, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 24, stageId: 2, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 24, stageId: 3, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 24, stageId: 4, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 25, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 25, stageId: 2, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 25, stageId: 3, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 25, stageId: 4, createdAt: new Date(), updatedAt: new Date() },

      // 3 кандидата: дошли до стадии 5 (ID 26-28)
      { candidateId: 26, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 26, stageId: 2, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 26, stageId: 3, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 26, stageId: 4, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 26, stageId: 5, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 27, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 27, stageId: 2, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 27, stageId: 3, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 27, stageId: 4, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 27, stageId: 5, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 28, stageId: 1, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 28, stageId: 2, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 28, stageId: 3, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 28, stageId: 4, createdAt: new Date(), updatedAt: new Date() }, { candidateId: 28, stageId: 5, createdAt: new Date(), updatedAt: new Date() },

      // 1 кандидат: дошел до стадии 6 (ID 29)
      { candidateId: 29, stageId: 1, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 29, stageId: 2, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 29, stageId: 3, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 29, stageId: 4, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 29, stageId: 5, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 29, stageId: 6, createdAt: new Date(), updatedAt: new Date() },

      // 1 кандидат: дошел до стадии 7 (ID 30)
      { candidateId: 30, stageId: 1, createdAt: new Date(), updatedAt: new Date() },
      { candidateId: 30, stageId: 7, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CandidatesStages', null, {});
  }
};
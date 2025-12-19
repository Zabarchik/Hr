'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stages', [
      { title: 'Новые' },
      { title: 'Письмо' },
      { title: 'Звонок' },
      { title: 'Интервью' },
      { title: 'Оффер' },
      { title: 'В штате' },
      { title: 'Отказ' },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

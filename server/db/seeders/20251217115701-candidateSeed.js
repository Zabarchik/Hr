'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Candidates', [
   { name: 'Алексей', surname: 'Иванов', position: 'Frontend Developer', phone: '+79111234567', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Мария', surname: 'Смирнова', position: 'Backend Developer', phone: '+79222334455', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Дмитрий', surname: 'Кузнецов', position: 'QA Engineer', phone: '+79333445566', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Ольга', surname: 'Попова', position: 'UI/UX Designer', phone: '+79444556677', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Сергей', surname: 'Васильев', position: 'Project Manager', phone: '+79555667788', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Елена', surname: 'Петрова', position: 'Frontend Developer', phone: '+79666778899', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Андрей', surname: 'Соколов', position: 'DevOps Engineer', phone: '+79777889900', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Наталья', surname: 'Михайлова', position: 'Backend Developer', phone: '+79888990011', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Максим', surname: 'Новиков', position: 'Data Analyst', phone: '+79999001122', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Анна', surname: 'Федорова', position: 'QA Specialist', phone: '+79000112233', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Артем', surname: 'Морозов', position: 'Fullstack Developer', phone: '+79112223344', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Екатерина', surname: 'Волкова', position: 'HR Manager', phone: '+79223334455', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Игорь', surname: 'Лебедев', position: 'Backend Developer', phone: '+79334445566', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Татьяна', surname: 'Семенова', position: 'Frontend Developer', phone: '+79445556677', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Виктор', surname: 'Егоров', position: 'System Administrator', phone: '+79556667788', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Юлия', surname: 'Козлова', position: 'UI/UX Designer', phone: '+79667778899', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Роман', surname: 'Павлов', position: 'Mobile Developer', phone: '+79778889900', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Светлана', surname: 'Степанова', position: 'QA Engineer', phone: '+79889990011', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Денис', surname: 'Николаев', position: 'Project Manager', phone: '+79990001122', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Виктория', surname: 'Макарова', position: 'Frontend Developer', phone: '+79001112233', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Константин', surname: 'Никитин', position: 'Backend Developer', phone: '+79113334455', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Любовь', surname: 'Захарова', position: 'Copywriter', phone: '+79224445566', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Михаил', surname: 'Зайцев', position: 'DevOps Engineer', phone: '+79335556677', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Алина', surname: 'Соловьева', position: 'Backend Developer', phone: '+79446667788', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Олег', surname: 'Борисов', position: 'Data Scientist', phone: '+79557778899', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Яна', surname: 'Яковлева', position: 'Frontend Developer', phone: '+79668889900', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Павел', surname: 'Григорьев', position: 'QA Automation', phone: '+79779990011', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Маргарита', surname: 'Антонова', position: 'UI/UX Designer', phone: '+79880001122', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Антон', surname: 'Тарасов', position: 'Backend Developer', phone: '+79991112233', createdAt: new Date(), updatedAt: new Date() },

      { name: 'Ирина', surname: 'Беляева', position: 'Project Manager', phone: '+79002223344', createdAt: new Date(), updatedAt: new Date() }
  ])
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

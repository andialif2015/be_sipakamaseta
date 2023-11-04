'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('survey', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING,
      },
      rating: {
        type: Sequelize.INTEGER
      },
      kritik_saran: {
        type: Sequelize.TEXT
      },
      praktis: {
        type: Sequelize.STRING,
      },
      cepat: {
        type: Sequelize.STRING,
      },
      informasi: {
        type: Sequelize.STRING,
      },
      modern: {
        type: Sequelize.STRING,
      },
      pelayanan: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('survey');
  }
};
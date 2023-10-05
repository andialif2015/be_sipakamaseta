'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SuketBlmPunyaRumahs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      work: {
        type: Sequelize.STRING
      },
      agama: {
        type: Sequelize.STRING
      },
      rtrw: {
        type: Sequelize.STRING
      },
      dusun: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SuketBlmPunyaRumahs');
  }
};
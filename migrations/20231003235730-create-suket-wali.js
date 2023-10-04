'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SuketWalis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      nohp: {
        type: Sequelize.STRING
      },
      tempatL: {
        type: Sequelize.STRING
      },
      tglL: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      agama: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      sekolah: {
        type: Sequelize.STRING
      },
      namewali: {
        type: Sequelize.STRING
      },
      tempatLwali: {
        type: Sequelize.STRING
      },
      tglLwali: {
        type: Sequelize.STRING
      },
      alamatwali: {
        type: Sequelize.STRING
      },
      genderwali: {
        type: Sequelize.STRING
      },
      agamawali: {
        type: Sequelize.STRING
      },
      workwali: {
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
    await queryInterface.dropTable('SuketWalis');
  }
};
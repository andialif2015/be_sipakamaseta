'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SuketPengurusanPBBs', {
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
      nik: {
        type: Sequelize.STRING
      },
      tempatL: {
        type: Sequelize.STRING
      },
      tglL: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      agama: {
        type: Sequelize.STRING
      },
      work: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      dusun: {
        type: Sequelize.STRING
      },
      rtrw: {
        type: Sequelize.STRING
      },
      nama_anak: {
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
    await queryInterface.dropTable('SuketPengurusanPBBs');
  }
};
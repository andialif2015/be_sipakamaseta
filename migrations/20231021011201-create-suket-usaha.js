'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SuketUsahas', {
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
      tempatLahir: {
        type: Sequelize.STRING
      },
      tanggalLahir: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      agama: {
        type: Sequelize.STRING
      },
      pekerjaan: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      jenisUsaha: {
        type: Sequelize.STRING
      },
      alamatUsaha: {
        type: Sequelize.STRING
      },
      tahunMulaiUsaha: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
      },
      fileName: {
        type: Sequelize.STRING,
        defaultValue: "",
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
    await queryInterface.dropTable('SuketUsahas');
  }
};
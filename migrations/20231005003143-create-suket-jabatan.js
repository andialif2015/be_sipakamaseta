'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("suketjabatan", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      name: {
        type: Sequelize.STRING,
      },
      nohp: {
        type: Sequelize.STRING
      },
      tempatL: {
        type: Sequelize.STRING,
      },
      tglL: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      alamat: {
        type: Sequelize.STRING,
      },
      lamajabatan: {
        type: Sequelize.STRING,
      },
      jabatan: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.TINYINT,
        defaultValue: 0, // Set the default value to 0 (for false)
      },
      fileName: {
        type: Sequelize.STRING,
        defaultValue: "",
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('suketjabatan');
  }
};
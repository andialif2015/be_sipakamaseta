'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("superutangpiutang", {
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
        type: Sequelize.STRING,
      },
      alamat: {
        type: Sequelize.STRING,
      },
      work: {
        type: Sequelize.STRING,
      },
      umur: {
        type: Sequelize.STRING,
      },
      name_dua: {
        type: Sequelize.STRING,
      },
      alamat_dua: {
        type: Sequelize.STRING,
      },
      work_dua: {
        type: Sequelize.STRING,
      },
      umur_dua: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.TINYINT,
        defaultValue: 0, // Set the default value to 0 (for false)
      },
      fileName: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("superutangpiutang");
  }
};
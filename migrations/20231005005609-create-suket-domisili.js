'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SuketDomisilis", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      name: {
        type: Sequelize.STRING,
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
      agama: {
        type: Sequelize.STRING,
      },
      work: {
        type: Sequelize.STRING,
      },
      nik: {
        type: Sequelize.STRING,
      },
      stsnkh: {
        type: Sequelize.STRING,
      },
      alamat: {
        type: Sequelize.STRING,
      },
      status: {
        type: DataTypes.TINYINT,
        defaultValue: 0, // Set the default value to 0 (for false)
      },
      fileName: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SuketDomisilis');
  }
};
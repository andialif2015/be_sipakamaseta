'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SuketMenantus", {
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
      nohp: {
        type: Sequelize.STRING,
      },
      tempatL: {
        type: Sequelize.STRING,
      },
      tglL: {
        type: Sequelize.STRING,
      },
      alamat: {
        type: Sequelize.STRING,
      },
      nameMertua: {
        type: Sequelize.STRING,
      },
      tempatLMertua: {
        type: Sequelize.STRING,
      },
      tglLMertua: {
        type: Sequelize.STRING,
      },
      alamatmertua: {
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
    await queryInterface.dropTable('SuketMenantus');
  }
};
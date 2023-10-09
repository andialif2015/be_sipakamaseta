'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("imbS", {
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
      nik: {
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
      alamat: {
        type: Sequelize.STRING,
      },
      alamatB: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      buildsize: {
        type: Sequelize.STRING,
      },
      status: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
      },
      fileName: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('imbS');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SuketTelahMenikahs", {
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
      namepria: {
        type: Sequelize.STRING,
      },
      nohppria: {
        type: Sequelize.STRING,
      },
      tempatLpria: {
        type: Sequelize.STRING,
      },
      tglLpria: {
        type: Sequelize.STRING,
      },
      alamatpria: {
        type: Sequelize.STRING,
      },
      agamapria: {
        type: Sequelize.STRING,
      },
      workpria: {
        type: Sequelize.STRING,
      },
      namewanita: {
        type: Sequelize.STRING,
      },
      nohpwanita: {
        type: Sequelize.STRING,
      },
      tempatLwanita: {
        type: Sequelize.STRING,
      },
      tglLwanita: {
        type: Sequelize.STRING,
      },
      alamatwanita: {
        type: Sequelize.STRING,
      },
      agamawanita: {
        type: Sequelize.STRING,
      },
      workwanita: {
        type: Sequelize.STRING,
      },
      tglnikah: {
        type: Sequelize.STRING,
      },
      lokasinikah: {
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
    await queryInterface.dropTable('SuketTelahMenikahs');
  }
};
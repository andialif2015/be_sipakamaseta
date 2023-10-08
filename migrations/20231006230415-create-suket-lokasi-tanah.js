'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SuketLokasiTanahs", {
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
      namepemilik: {
        type: Sequelize.STRING,
      },
      alamattanah: {
        type: Sequelize.STRING,
      },
      luastanah: {
        type: Sequelize.STRING,
      },
      luasbangunan: {
        type: Sequelize.STRING,
      },
      dusun: {
        type: Sequelize.STRING,
      },
      nosertiftanah: {
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
    await queryInterface.dropTable('SuketLokasiTanahs');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SuketLokasiTanahs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namepemilik: {
        type: Sequelize.STRING
      },
      alamattanah: {
        type: Sequelize.STRING
      },
      luastanah: {
        type: Sequelize.STRING
      },
      luasbangunan: {
        type: Sequelize.STRING
      },
      dusun: {
        type: Sequelize.STRING
      },
      nosertiftanah: {
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
    await queryInterface.dropTable('SuketLokasiTanahs');
  }
};
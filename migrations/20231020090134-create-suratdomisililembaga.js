'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('suratdomisililembaga', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      nalemb: {
        type: Sequelize.STRING
      },
      nohp: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      tempatberdiri: {
        type: Sequelize.STRING
      },
      tglberdiri: {
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
      status: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
      },
      fileName: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('suratdomisililembaga');
  }
};
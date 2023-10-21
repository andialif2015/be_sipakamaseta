'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SuratDomisiliLembagas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SuratDomisiliLembagas');
  }
};
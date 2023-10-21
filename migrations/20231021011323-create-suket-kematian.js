'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SuketKematians', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      nohp: {
        type: Sequelize.STRING
      },
      umur: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      alamatMeninggal: {
        type: Sequelize.STRING
      },
      tempatDikebumikan: {
        type: Sequelize.STRING
      },
      tanggalDikebumikan: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
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
    await queryInterface.dropTable('SuketKematians');
  }
};
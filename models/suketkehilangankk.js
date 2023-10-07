'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuketKehilanganKK extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SuketKehilanganKK.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Set as primary key
        autoIncrement: true, // Enable auto-increment
        unique: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      name: Sequelize.STRING,
      nohp: Sequelize.STRING,
      tempatL: Sequelize.STRING,
      tglL: Sequelize.STRING,
      alamat: Sequelize.STRING,
      nik: Sequelize.STRING,
      nokk: Sequelize.STRING,
      alasan: Sequelize.STRING,
      status: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
      },
      fileName: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
    },
    {
      sequelize,
      modelName: "SuketKehilanganKK",
      tableName: "suketkehilangankk",
      timestamps: false,
    }
  );
  return SuketKehilanganKK;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imbs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Imbs.init(
    {
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
      name: DataTypes.STRING,
      nohp: DataTypes.STRING,
      tempatL: DataTypes.STRING,
      tglL: DataTypes.STRING,
      nik: DataTypes.STRING,
      gender: DataTypes.STRING,
      agama: DataTypes.STRING,
      work: DataTypes.STRING,
      alamat: DataTypes.STRING,
      alamatB: DataTypes.STRING,
      type: DataTypes.STRING,
      buildsize: DataTypes.STRING,
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
      modelName: "Imbs",
      tableName: "imbS",
      timestamps: false,
    }
  );
  return Imbs;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpToDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SpToDesa.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Set as primary key
        autoIncrement: true, // Enable auto-increment
        unique: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Set default value to the current timestamp
      },
      name: DataTypes.STRING,
      nohp: DataTypes.STRING,
      tempatL: DataTypes.STRING,
      tglL: DataTypes.STRING,
      alamat: DataTypes.STRING,
      agama: DataTypes.STRING,
      gender: DataTypes.STRING,
      nik: DataTypes.STRING,
      nokk: DataTypes.STRING,
      work: DataTypes.STRING,
      dusun: DataTypes.STRING,
      tujuan: DataTypes.STRING,
      status: {
        type: DataTypes.TINYINT,
        defaultValue: 0, // Set the default value to 0 (for false)
      },
      fileName: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
    },
    {
      sequelize,
      modelName: "SpToDesa",
      tableName: "spkedesa",
      timestamps: false,
    }
  );
  return SpToDesa;
};
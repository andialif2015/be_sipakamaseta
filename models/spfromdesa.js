'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpFromDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SpFromDesa.init(
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
      nik: DataTypes.STRING,
      alamat: DataTypes.STRING,
      wargaN: DataTypes.STRING,
      tempatL: DataTypes.STRING,
      tglL: DataTypes.STRING,
      agama: DataTypes.STRING,
      work: DataTypes.STRING,
      tujuan: DataTypes.STRING,
      status: {
        type: DataTypes.TINYINT,
        defaultValue: 0, // Set the default value to 0 (for false)
      },
      fileName: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
    },
    {
      sequelize,
      modelName: "SpFromDesa",
      tableName: "spfromdesa",
      timestamps: false,
    }
  );
  return SpFromDesa;
};
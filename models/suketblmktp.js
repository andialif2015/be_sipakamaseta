'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuketBlmKtp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SuketBlmKtp.init(
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
      name: DataTypes.STRING,
      nik: DataTypes.STRING,
      tempatL: DataTypes.STRING,
      tglL: DataTypes.STRING,
      alamat: DataTypes.STRING,
      dusun: DataTypes.STRING,
      thnktp: DataTypes.STRING,
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
      modelName: "SuketBlmKtp",
      tableName: "suketblmktp",
      timestamps: false,
    }
  );
  return SuketBlmKtp;
};
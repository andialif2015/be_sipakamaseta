'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuketBlmPunyaRumah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SuketBlmPunyaRumah.init(
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
      nohp: DataTypes.STRING,
      nik: DataTypes.STRING,
      alamat: DataTypes.STRING,
      gender: DataTypes.STRING,
      work: DataTypes.STRING,
      agama: DataTypes.STRING,
      rtrw: DataTypes.STRING,
      dusun: DataTypes.STRING,
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
      modelName: "SuketBlmPunyaRumah",
      tableName: "suketblmpunyarumah",
      timestamps: false,
    }
  );
  return SuketBlmPunyaRumah;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuketKehilanganStpd extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SuketKehilanganStpd.init(
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
      tempatL: DataTypes.STRING,
      tglL: DataTypes.STRING,
      alamat: DataTypes.STRING,
      agama: DataTypes.STRING,
      gender: DataTypes.STRING,
      sekolah: DataTypes.STRING,
      namewali: DataTypes.STRING,
      tempatLwali: DataTypes.STRING,
      tglLwali: DataTypes.STRING,
      alamatwali: DataTypes.STRING,
      genderwali: DataTypes.STRING,
      agamawali: DataTypes.STRING,
      workwali: DataTypes.STRING,
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
      modelName: "SuketKehilanganStpd",
      tableName: "suketkehilanganstpd",
      timestamps: false,
    }
  );
  return SuketKehilanganStpd;
};
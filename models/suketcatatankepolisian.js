'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuketCatatanKepolisian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SuketCatatanKepolisian.init({
    name: DataTypes.STRING,
    nohp: DataTypes.STRING,
    tempatL: DataTypes.STRING,
    tglL: DataTypes.STRING,
    gender: DataTypes.STRING,
    agama: DataTypes.STRING,
    work: DataTypes.STRING,
    nik: DataTypes.STRING,
    alamat: DataTypes.STRING,
    tujuan: DataTypes.STRING,
    status: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },
    fileName: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
  }, {
    sequelize,
    modelName: 'SuketCatatanKepolisian',
  });
  return SuketCatatanKepolisian;
};
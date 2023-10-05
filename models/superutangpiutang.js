'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperUtangPiutang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SuperUtangPiutang.init({
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
    workwali: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SuperUtangPiutang',
    tableName: 'superutangpiutang',
    timestamps: false
  });
  return SuperUtangPiutang;
};
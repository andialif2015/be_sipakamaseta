'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuketUsaha extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SuketUsaha.init({
    name: DataTypes.STRING,
    nohp: DataTypes.STRING,
    tempatLahir: DataTypes.STRING,
    tanggalLahir: DataTypes.STRING,
    gender: DataTypes.STRING,
    agama: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    nik: DataTypes.STRING,
    alamat: DataTypes.STRING,
    jenisUsaha: DataTypes.STRING,
    alamatUsaha: DataTypes.STRING,
    tahunMulaiUsaha: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'SuketUsaha',
  });
  return SuketUsaha;
};
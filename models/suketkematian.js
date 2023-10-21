'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuketKematian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SuketKematian.init({
    name: DataTypes.STRING,
    nohp: DataTypes.STRING,
    umur: DataTypes.STRING,
    gender: DataTypes.STRING,
    alamat: DataTypes.STRING,
    alamatMeninggal: DataTypes.STRING,
    tempatDikebumikan: DataTypes.STRING,
    tanggalDikebumikan: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'SuketKematian',
  });
  return SuketKematian;
};
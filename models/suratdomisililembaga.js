'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuratDomisiliLembaga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SuratDomisiliLembaga.init({
    nalemb: DataTypes.STRING,
    nohp: DataTypes.STRING,
    alamat: DataTypes.STRING,
    tempatberdiri: DataTypes.STRING,
    tglberdiri: DataTypes.STRING,
    luastanah: DataTypes.STRING,
    luasbangunan: DataTypes.STRING,
    dusun: DataTypes.STRING,
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
    modelName: 'SuratDomisiliLembaga',
  });
  return SuratDomisiliLembaga;
};
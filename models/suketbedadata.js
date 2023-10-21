'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuketBedaData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SuketBedaData.init({
    namaSalah: DataTypes.STRING,
    tanggalLahirSalah: DataTypes.STRING,
    namaBenar: DataTypes.STRING,
    tanggalLahirBenar: DataTypes.STRING,
    nohp: DataTypes.STRING,
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
    modelName: 'SuketBedaData',
  });
  return SuketBedaData;
};
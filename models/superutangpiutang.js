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
  SuperUtangPiutang.init(
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
      alamat: DataTypes.STRING,
      work: DataTypes.STRING,
      umur: DataTypes.STRING,
      name_dua: DataTypes.STRING,
      alamat_dua: DataTypes.STRING,
      work_dua: DataTypes.STRING,
      umur_dua: DataTypes.STRING,
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
      modelName: "SuperUtangPiutang",
      tableName: "superutangpiutang",
      timestamps: false,
    }
  );
  return SuperUtangPiutang;
};
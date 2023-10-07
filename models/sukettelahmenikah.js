'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuketTelahMenikah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SuketTelahMenikah.init(
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
      namepria: DataTypes.STRING,
      nohppria: DataTypes.STRING,
      tempatLpria: DataTypes.STRING,
      tglLpria: DataTypes.STRING,
      alamatpria: DataTypes.STRING,
      agamapria: DataTypes.STRING,
      workpria: DataTypes.STRING,
      namewanita: DataTypes.STRING,
      nohpwanita: DataTypes.STRING,
      tempatLwanita: DataTypes.STRING,
      tglLwanita: DataTypes.STRING,
      alamatwanita: DataTypes.STRING,
      agamawanita: DataTypes.STRING,
      workwanita: DataTypes.STRING,
      tglnikah: DataTypes.STRING,
      lokasinikah: DataTypes.STRING,
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
      modelName: "SuketTelahMenikah",
      tableName: "sukettelahmenikah",
      timestamps: false,
    }
  );
  return SuketTelahMenikah;
};
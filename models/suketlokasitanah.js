'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuketLokasiTanah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SuketLokasiTanah.init(
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
      namepemilik: DataTypes.STRING,
      alamattanah: DataTypes.STRING,
      luastanah: DataTypes.STRING,
      luasbangunan: DataTypes.STRING,
      dusun: DataTypes.STRING,
      nosertiftanah: DataTypes.STRING,
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
      modelName: "SuketLokasiTanah",
      tableName: "suketlokasitanah",
      timestamps: false,
    }
  );
  return SuketLokasiTanah;
};
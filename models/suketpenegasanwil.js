'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuketPenegasanWil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SuketPenegasanWil.init(
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
      jabatan: DataTypes.STRING,
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
      modelName: "SuketPenegasanWil",
      tableName: "suketpenegasanwil",
      timestamps: false,
    }
  );
  return SuketPenegasanWil;
};
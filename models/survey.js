'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Survey.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      nama: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      kritik_saran: DataTypes.TEXT,
      praktis: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
      },
      cepat: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
      },
      informasi: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
      },
      modern: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
      },
      pelayanan: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Survey",
      tableName: "survey",
      timestamps: false,
    }
  );
  return Survey;
};
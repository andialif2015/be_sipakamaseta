'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: DataTypes.STRING,
    alamat: DataTypes.STRING,
    nowa: DataTypes.STRING,
    ttl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
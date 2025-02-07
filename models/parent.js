'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Parent.init({
    parent_name: DataTypes.STRING,
    relationship: DataTypes.STRING,
    permanent_address: DataTypes.STRING,
    temp_address: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    comments: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Parent',
  });
  return Parent;
};
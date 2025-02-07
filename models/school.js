'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  School.init({
    school_name: DataTypes.TEXT,
    school_type: DataTypes.STRING,
    city_id: DataTypes.INTEGER,
    district_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    established_year: DataTypes.DATE,
    current_semester_id: DataTypes.INTEGER,
    school_training_level_id: DataTypes.INTEGER,
    prizes: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'School',
  });
  return School;
};
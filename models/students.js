'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Students.init({
    user_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    permanent_address: DataTypes.STRING,
    temp_address: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    enrollment_number: DataTypes.INTEGER,
    addmission_date: DataTypes.DATE,
    ethnicity: DataTypes.STRING,
    religion: DataTypes.STRING,
    national_id: DataTypes.STRING,
    medical_info_id: DataTypes.INTEGER,
    parent_id: DataTypes.INTEGER,
    class_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Students',
  });
  return Students;
};
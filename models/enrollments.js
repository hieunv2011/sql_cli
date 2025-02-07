'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Enrollments.init({
    student_id: DataTypes.INTEGER,
    subject_code: DataTypes.INTEGER,
    class_id: DataTypes.INTEGER,
    semester_id: DataTypes.INTEGER,
    register_status: DataTypes.STRING,
    school_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Enrollments',
  });
  return Enrollments;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exams extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Exams.init({
    exam_id: DataTypes.INTEGER,
    subject_code: DataTypes.INTEGER,
    semester_id: DataTypes.INTEGER,
    exam_type: DataTypes.STRING,
    exam_date: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    comments: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Exams',
  });
  return Exams;
};
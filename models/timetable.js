'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Timetable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Timetable.init({
    id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    teacher_id: DataTypes.INTEGER,
    classroom_id: DataTypes.INTEGER,
    day_of_week: DataTypes.STRING,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    semester: DataTypes.STRING,
    year: DataTypes.INTEGER,
    status: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Timetable',
  });
  return Timetable;
};
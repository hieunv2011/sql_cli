'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomeRoomTeachers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HomeRoomTeachers.init({
    id: DataTypes.INTEGER,
    teacher_id: DataTypes.INTEGER,
    semesterid: DataTypes.INTEGER,
    homeroom_class_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HomeRoomTeachers',
  });
  return HomeRoomTeachers;
};
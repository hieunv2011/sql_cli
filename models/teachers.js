'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teachers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Teachers.init({
    user_id: DataTypes.INTEGER,
    teacher_id: DataTypes.INTEGER,
    permanent_address: DataTypes.STRING,
    temp_address: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    hired_date: DataTypes.DATE,
    basic_salary: DataTypes.DECIMAL,
    degree: DataTypes.STRING,
    year_of_experience: DataTypes.INTEGER,
    designation: DataTypes.STRING,
    department_id: DataTypes.INTEGER,
    prizes: DataTypes.INTEGER,
    medical_info_id: DataTypes.INTEGER,
    status: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Teachers',
  });
  return Teachers;
};
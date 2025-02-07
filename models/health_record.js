'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Health_Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Health_Record.init({
    date_of_record: DataTypes.DATE,
    weight: DataTypes.DECIMAL,
    height: DataTypes.DECIMAL,
    blood_type: DataTypes.STRING,
    health_issue: DataTypes.STRING,
    treatment: DataTypes.STRING,
    status: DataTypes.STRING,
    hospital_name: DataTypes.STRING,
    doctor_name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Health_Record',
  });
  return Health_Record;
};
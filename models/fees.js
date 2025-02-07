'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fees.init({
    fee_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    fee_type: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    due_date_start: DataTypes.DATE,
    due_date_end: DataTypes.DATE,
    target: DataTypes.STRING,
    status: DataTypes.STRING,
    semester_id: DataTypes.INTEGER,
    comments: DataTypes.TEXT,
    payment_method: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fees',
  });
  return Fees;
};
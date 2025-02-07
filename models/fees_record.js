'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fees_Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fees_Record.init({
    fee_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    semester_id: DataTypes.INTEGER,
    fee_type: DataTypes.STRING,
    paid_amount: DataTypes.DECIMAL,
    paid_date: DataTypes.DATE,
    payment_method: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fees_Record',
  });
  return Fees_Record;
};
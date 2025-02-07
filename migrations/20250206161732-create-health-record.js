'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Health_Records', {
      health_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_of_record: {
        type: Sequelize.DATE,
        allowNull: false
      },
      weight: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: true
      },
      height: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: true
      },
      blood_type: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      health_issue: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      treatment: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      status: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      hospital_name: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      doctor_name: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      updated_by: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Health_Records');
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Classrooms', {
      class_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      grade_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Class_Grade_Lvs', // Bảng Class_Grade_Lvs
          key: 'grade_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      class_section: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      room_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Class_Room_Numbers', // Bảng Class_Room_Numbers
          key: 'room_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    await queryInterface.dropTable('Classrooms');
  }
};

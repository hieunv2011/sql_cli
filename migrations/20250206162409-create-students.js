'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      student_id: {
        type: Sequelize.INTEGER,
        // primaryKey: true,
        unique: true,
        allowNull: false,
      },
      permanent_address: {
        type: Sequelize.STRING(200)
      },
      temp_address: {
        type: Sequelize.STRING(200)
      },
      contact_number: {
        type: Sequelize.STRING(15)
      },
      enrollment_number: {
        type: Sequelize.INTEGER
      },
      addmission_date: {
        type: Sequelize.DATE
      },
      ethnicity: {
        type: Sequelize.STRING(50)
      },
      religion: {
        type: Sequelize.STRING(50)
      },
      national_id: {
        type: Sequelize.STRING(50)
      },
      medical_info_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Health_Records', // Bảng Health_Records
          key: 'health_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      parent_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Parents', // Bảng Parents
          key: 'parent_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      class_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Classrooms', // Bảng Classrooms
          key: 'class_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      status: {
        type: Sequelize.STRING(20)
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
    await queryInterface.dropTable('Students');
  }
};

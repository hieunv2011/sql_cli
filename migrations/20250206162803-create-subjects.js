'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Subjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      subject_code: {
        type: Sequelize.STRING(10),
        allowNull: false,
        unique: true,
        // primaryKey: true,
      },
      subject_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      class_name: {
        type: Sequelize.STRING(20),
      },
      subject_type: {
        type: Sequelize.STRING(20),
      },
      school_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Schools',
          key: 'school_id',
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_by: {
        type: Sequelize.INTEGER,
      },
      updated_by: {
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Subjects');
  },
};

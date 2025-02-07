'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schools', {
      school_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      school_name: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      school_type: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      city_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'City',
          key: 'city_id'
        },
        allowNull: true
      },
      district_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'District',
          key: 'district_id'
        },
        allowNull: true
      },
      address: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      contact_number: {
        type: Sequelize.STRING(15),
        allowNull: true
      },
      established_year: {
        type: Sequelize.DATE,
        allowNull: true
      },
      current_semester_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Semesters',
          key: 'semester_id'
        },
        allowNull: true
      },
      school_training_level_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'School_Training_Level',
          key: 'school_training_level_id'
        },
        allowNull: true
      },
      prizes: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Prizes',
          key: 'prize_id'
        },
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
    await queryInterface.dropTable('Schools');
  }
};

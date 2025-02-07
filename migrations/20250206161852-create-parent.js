'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Parents', {
      parent_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parent_name: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      relationship: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      permanent_address: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      temp_address: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      contact_number: {
        type: Sequelize.STRING(15),
        allowNull: true
      },
      comments: {
        type: Sequelize.STRING(255),
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
    await queryInterface.dropTable('Parents');
  }
};

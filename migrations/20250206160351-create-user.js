'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      family_name: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      given_name: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      birth_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      gender: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User_Roles', // Tên bảng tham chiếu
          key: 'role_id' // Tên cột trong bảng tham chiếu
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL' // Xóa User mà không xóa Role
      },
      last_login: {
        type: Sequelize.DATE,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: 'active' // Trạng thái mặc định là "active"
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
    await queryInterface.dropTable('Users');
  }
};

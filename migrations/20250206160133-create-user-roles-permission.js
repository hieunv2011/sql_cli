'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_Roles_Permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User_Roles', // Tên bảng mà khóa ngoại tham chiếu
          key: 'role_id' // Tên cột trong bảng tham chiếu
        },
        onUpdate: 'CASCADE', // Cập nhật khi bảng User_Roles thay đổi
        onDelete: 'CASCADE' // Xóa khi bảng User_Roles bị xóa
      },
      permission_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Permissions', // Tên bảng mà khóa ngoại tham chiếu
          key: 'permission_id' // Tên cột trong bảng tham chiếu
        },
        onUpdate: 'CASCADE', // Cập nhật khi bảng Permissions thay đổi
        onDelete: 'CASCADE' // Xóa khi bảng Permissions bị xóa
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
    await queryInterface.dropTable('User_Roles_Permissions');
  }
};

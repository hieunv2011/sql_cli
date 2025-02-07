module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Departments", {
      department_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      department_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      school_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Schools",
          key: "school_id",
        },
        allowNull: false,
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
        allowNull: false,
      },
      updated_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Departments");
  },
};

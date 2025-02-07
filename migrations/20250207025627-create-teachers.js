module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Teachers", {
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "user_id",
        },
        allowNull: false,
      },
      teacher_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      permanent_address: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      temp_address: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      contact_number: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      hired_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      basic_salary: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      degree: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      year_of_experience: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      designation: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      department_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Departments",
          key: "department_id",
        },
        allowNull: false,
      },
      prizes: {
        type: Sequelize.INTEGER,
        references: {
          model: "Prizes",
          key: "prize_id",
        },
        allowNull: true,
      },
      medical_info_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Health_Records",
          key: "health_id",
        },
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING(20),
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
    await queryInterface.dropTable("Teachers");
  },
};

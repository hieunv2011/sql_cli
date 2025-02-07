module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Fees", {
      fee_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Students",
          key: "student_id",
        },
        allowNull: true,
      },
      fee_type: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      amount: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      due_date_start: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      due_date_end: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      target: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      semester_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Semesters",
          key: "semester_id",
        },
        allowNull: false,
      },
      comments: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      payment_method: {
        type: Sequelize.STRING(20),
        allowNull: true,
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
    await queryInterface.dropTable("Fees");
  },
};

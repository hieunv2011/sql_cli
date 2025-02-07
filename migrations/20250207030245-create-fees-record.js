module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Fees_Record", {
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
      semester_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Semesters",
          key: "semester_id",
        },
        allowNull: false,
      },
      fee_type: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      paid_amount: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      paid_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      payment_method: {
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
    await queryInterface.dropTable("Fees_Record");
  },
};

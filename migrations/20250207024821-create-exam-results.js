module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Exam_Results", {
      result_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      exam_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Exams",
          key: "exam_id",
        },
        allowNull: false,
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Students",
          key: "student_id",
        },
        allowNull: false,
      },
      mark: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      comments: {
        type: Sequelize.STRING(255),
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
    await queryInterface.dropTable("Exam_Results");
  },
};

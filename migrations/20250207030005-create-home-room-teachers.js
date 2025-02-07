module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("HomeRoomTeachers", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      teacher_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Teachers",
          key: "teacher_id",
        },
        allowNull: false,
      },
      semesterid: {
        type: Sequelize.INTEGER,
        references: {
          model: "Semesters",
          key: "semester_id",
        },
        allowNull: false,
      },
      homeroom_class_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Classrooms",
          key: "class_id",
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
    await queryInterface.dropTable("HomeRoomTeachers");
  },
};

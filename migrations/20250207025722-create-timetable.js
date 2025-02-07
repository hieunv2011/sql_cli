module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Timetable", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      course_id: {
        type: Sequelize.STRING,
        references: {
          model: "Subjects",
          key: "subject_code",
        },
        allowNull: false,
      },
      teacher_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Teachers",
          key: "teacher_id",
        },
        allowNull: false,
      },
      classroom_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Classrooms",
          key: "class_id",
        },
        allowNull: false,
      },
      day_of_week: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      start_time: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      end_time: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      semester: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      status: {
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
    await queryInterface.dropTable("Timetable");
  },
};

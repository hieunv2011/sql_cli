module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Attendance', {
      attendance_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      class_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Classrooms',
          key: 'class_id'
        },
        allowNull: false
      },
      subject_code: {
        type: Sequelize.STRING,
        references: {
          model: 'Subjects',
          key: 'subject_code'
        },
        allowNull: false
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Students',
          key: 'student_id'
        },
        allowNull: false
      },
      attendance_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      comments: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      semester_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Semesters',
          key: 'semester_id'
        },
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
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
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Attendance');
  }
};

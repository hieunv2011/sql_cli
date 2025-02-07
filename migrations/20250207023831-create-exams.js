module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Exams', {
      exam_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      subject_code: {
        type: Sequelize.STRING,
        references: {
          model: 'Subjects',
          key: 'subject_code'
        },
        allowNull: false
      },
      semester_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Semesters',
          key: 'semester_id'
        },
        allowNull: false
      },
      exam_type: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      exam_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      comments: {
        type: Sequelize.STRING(255),
        allowNull: true
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
    await queryInterface.dropTable('Exams');
  }
};

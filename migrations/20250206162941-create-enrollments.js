// migration file for Enrollments table
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enrollments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Students',  
          key: 'student_id',  
        },
        allowNull: false,
      },
      subject_code: {
        type: Sequelize.STRING,
        references: {
          model: 'Subjects',  
          key: 'subject_code',
        },
        allowNull: false,
      },
      class_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Classrooms',
          key: 'class_id',
        },
        allowNull: false,
      },
      semester_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Semesters',  // Bảng Semeters
          key: 'semester_id',
        },
        allowNull: false,
      },
      register_status: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      school_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Schools',  // Bảng Schools
          key: 'school_id',
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
        allowNull: true,
      },
      updated_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Enrollments');
  },
};

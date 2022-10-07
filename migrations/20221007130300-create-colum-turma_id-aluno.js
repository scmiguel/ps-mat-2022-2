'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'alunos',
      'truma_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'cursos',
          key: 'id'
        },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'alunos',
      'turma_id'
    )
  }
};

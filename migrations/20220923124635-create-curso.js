'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sigla: {
        type: Sequelize.STRING(5),
        allowNull: false,
        unique: true
      },
      descricao: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      duracao_meses: {
        type: Sequelize.INTEGER,
        defaultValue: 6,
        allowNull: false
      },
      carga_horaria: {
        type: Sequelize.INTEGER,
        defaultValue: 80,
        allowNull: false
      },
      valor_total: {
        type: Sequelize.DECIMAL(18,2),
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cursos');
  }
};
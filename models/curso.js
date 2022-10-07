const { DataTypes } = require('sequelize');
const db = require('../config/db');

const model = db.define('Curso', {
// Model attributes are defined here
id: {
  allowNull: false,
  autoIncrement: true,
  primaryKey: true,
  type: DataTypes.INTEGER
},
sigla: {
  type: DataTypes.STRING(5),
  allowNull: false,
  unique: true
},
descricao: {
  type: DataTypes.STRING(50),
  allowNull: false
},
duracao_meses: {
  type: DataTypes.INTEGER,
  defaultValue: 6,
  allowNull: false
},
carga_horaria: {
  type: DataTypes.INTEGER,
  defaultValue: 80,
  allowNull: false
},
valor_total: {
  type: DataTypes.DECIMAL(18,2),
  allowNull:false
},
createdAt: {
  allowNull: false,
  type: DataTypes.DATE
},
updatedAt: {
  allowNull: false,
  type: DataTypes.DATE
}
}, {
    tableName: 'cursos',
});

model.associations = models =>{
  model.hasMany(models.Turma, {
    foreignKey: 'turma_id',
    sourceKey: 'id'
  })
}

// Cria a tabela no banco de dados, caso ainda não exista
model.sync()

module.exports = model

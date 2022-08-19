const { DataTypes, Model } = require('sequelize');
const db = require('../config/db')

module.exports=function(){

const Aluno = db.define('Aluno', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
  },
  doc_identidade: {
      type: DataTypes.STRING(20),
      allowNull: false,
  },
  cpf: {
      type: DataTypes.STRING(100),
      allowNull: false,
  },
  logradouro: {
      type: DataTypes.STRING(100),
      allowNull: false,
  },
  num_imovel: {
      type: DataTypes.STRING(10),
      allowNull: false,
  },
  complemento: {
      type: DataTypes.STRING(50),
      allowNull: true,
  },
  bairro: {
      type: DataTypes.STRING(50),
      allowNull: false,
  },
  uf: {
      type: DataTypes.STRING(2),
      allowNull: false,
  },
  telefone: {
      type: DataTypes.STRING(20),
      allowNull: false,
  },
  email: {
      type: DataTypes.STRING(50),
      allowNull: false,
  },
  turma: {
      type: DataTypes.CHAR(5),
      allowNull: false,
  }
}, {
    tableName: 'alunos'
  
});

 model.sync()
 return model

}
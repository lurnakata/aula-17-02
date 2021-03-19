const { query } = require('express');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'aluno_nota',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        descricao: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        nota: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        aluno_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        materia_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        schema: 'sequelize',
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable({
      tableName: 'aluno_nota',
      schema: 'sequelize',
    });
  },
};

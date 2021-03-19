const { query } = require('express');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'aluno_telefone',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        numero: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        aluno_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        tipo_id: {
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
      tableName: 'aluno_telefone',
      schema: 'sequelize',
    });
  },
};

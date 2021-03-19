const { query } = require('express');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'aluno_telefone_tipo',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
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
      tableName: 'aluno_telefone_tipo',
      schema: 'sequelize',
    });
  },
};

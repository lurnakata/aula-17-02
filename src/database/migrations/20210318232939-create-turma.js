const { query } = require('express');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'turma',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        codigo: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        data_inicio: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        data_fim: {
          type: Sequelize.DataTypes.DATE,
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
      tableName: 'turma',
      schema: 'sequelize',
    });
  },
};

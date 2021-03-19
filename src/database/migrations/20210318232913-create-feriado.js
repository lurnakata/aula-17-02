const { query } = require('express');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'feriado',
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
        data: {
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
      tableName: 'feriado',
      schema: 'sequelize',
    });
  },
};

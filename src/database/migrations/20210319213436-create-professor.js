const { query } = require('express');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'professor',
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
        idade: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        cidade: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        uf: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        pais: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          default: 'Brasil',
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
      tableName: 'professor',
      schema: 'sequelize',
    });
  },
};

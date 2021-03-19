module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'turma',
        schema: 'sequelize',
      },
      [
        {
          codigo: 'H1',
          data_inicio: '2021-04-01',
          data_fim: '2021-12-31',
        },
        {
          codigo: 'H2',
          data_inicio: '2022-04-01',
          data_fim: '2022-12-31',
        },
        {
          codigo: 'M1',
          data_inicio: '2021-06-01',
          data_fim: '2021-12-31',
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'turma',
        schema: 'sequelize',
      },
      null,
      {}
    );
  },
};

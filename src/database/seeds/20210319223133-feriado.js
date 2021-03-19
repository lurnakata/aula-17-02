module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'feriado',
        schema: 'sequelize',
      },
      [
        {
          descricao: 'Natal',
          data: '2021-12-25',
        },
        {
          descricao: 'Tiradentes',
          data: '2021-04-21',
        },
        {
          descricao: 'Pascoa',
          data: '2021-04-04',
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'feriado',
        schema: 'sequelize',
      },
      null,
      {}
    );
  },
};

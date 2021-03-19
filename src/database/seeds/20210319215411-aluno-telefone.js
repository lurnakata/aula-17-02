module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'aluno_telefone',
        schema: 'sequelize',
      },
      [
        {
          numero: '3333-1111',
          aluno_id: 1,
          tipo_id: 1,
        },
        {
          numero: '5555-1111',
          aluno_id: 2,
          tipo_id: 1,
        },
        {
          numero: '9999-1111',
          aluno_id: 3,
          tipo_id: 2,
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'aluno_telefone',
        schema: 'sequelize',
      },
      null,
      {}
    );
  },
};

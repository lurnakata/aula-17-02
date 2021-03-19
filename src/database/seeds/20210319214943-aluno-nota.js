module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'aluno_nota',
        schema: 'sequelize',
      },
      [
        {
          descricao: 'Prova 1',
          nota: 10,
          aluno_id: 1,
          materia_id: 1,
        },
        {
          descricao: 'Prova 1',
          nota: 8,
          aluno_id: 2,
          materia_id: 1,
        },
        {
          descricao: 'Prova 2',
          nota: 7,
          aluno_id: 2,
          materia_id: 2,
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'aluno_nota',
        schema: 'sequelize',
      },
      null,
      {}
    );
  },
};

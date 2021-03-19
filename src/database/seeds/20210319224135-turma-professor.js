module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'turma_professor',
        schema: 'sequelize',
      },
      [
        {
          turma_id: 1,
          professor_id: 1,
        },
        {
          turma_id: 2,
          professor_id: 2,
        },
        {
          turma_id: 1,
          professor_id: 3,
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

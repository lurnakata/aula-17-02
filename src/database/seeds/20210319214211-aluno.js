module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'aluno',
        schema: 'sequelize',
      },
      [
        {
          name: 'Lucimara',
          idade: 34,
          status: true,
          turma_id: 1,
          pcd: false,
          data_nascimento: '1987-01-30',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Marcelo',
          idade: 33,
          status: true,
          turma_id: 1,
          pcd: false,
          data_nascimento: '1988-05-20',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Agustina',
          idade: 71,
          status: true,
          turma_id: 1,
          pcd: false,
          data_nascimento: '1950-02-28',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'aluno',
        schema: 'sequelize',
      },
      null,
      {}
    );
  },
};

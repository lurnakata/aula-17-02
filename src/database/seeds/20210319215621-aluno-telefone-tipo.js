module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'aluno_telefone_tipo',
        schema: 'sequelize',
      },
      [
        {
          name: 'residencial',
        },
        {
          name: 'celular',
        },
        {
          name: 'comercial',
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'aluno_telefone_tipo',
        schema: 'sequelize',
      },
      null,
      {}
    );
  },
};

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'professor',
        schema: 'sequelize',
      },
      [
        {
          name: 'Terezinha',
          idade: 55,
          cidade: 'Foz do Iguacu',
          uf: 'PR',
          pais: 'Brasil',
          materia_id: 1,
        },
        {
          name: 'Gustavo',
          idade: 42,
          cidade: 'Porto Alegre',
          uf: 'SP',
          pais: 'Brasil',
          materia_id: 1,
        },
        {
          name: 'Nelio',
          idade: 50,
          cidade: 'São Paulo',
          uf: 'SP',
          pais: 'Brasil',
          materia_id: 3,
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'professor',
        schema: 'sequelize',
      },
      null,
      {}
    );
  },
};

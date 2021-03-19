module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'users',
        schema: 'sequelize',
      },
      [
        {
          name: 'Lucimara',
          email: 'lurnakata@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Marcelo',
          email: 'marcelo@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Agustina',
          email: 'agustina@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'users',
        schema: 'sequelize',
      },
      null,
      {}
    );
  },
};

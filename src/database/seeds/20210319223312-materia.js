module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'materia',
        schema: 'sequelize',
      },
      [
        {
          name: 'HTML',
        },
        {
          name: 'CSS',
        },
        {
          name: 'NODE',
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'materia',
        schema: 'sequelize',
      },
      null,
      {}
    );
  },
};

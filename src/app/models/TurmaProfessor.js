import Sequelize, { Model } from 'sequelize';

class TurmaProfessor extends Model {
  static init(sequelize) {
    super.init(
      {
        turma_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
        },
        professor_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
        },
      },
      {
        sequelize,
        schema: 'sequelize',
        tableName: 'turma_professor',
      }
    );

    return this;
  }
}

export default TurmaProfessor;

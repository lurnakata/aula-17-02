import Sequelize, { Model } from 'sequelize';

class AlunoTelefone extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        descricao: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        nota: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        aluno_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        materia_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        schema: 'sequelize',
      }
    );

    return this;
  }
}

export default AlunoTelefone;

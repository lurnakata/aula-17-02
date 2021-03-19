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
        numero: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        aluno_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        tipo_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        schema: 'sequelize',
        tableName: 'aluno_telefone',
      }
    );

    return this;
  }
}

export default AlunoTelefone;

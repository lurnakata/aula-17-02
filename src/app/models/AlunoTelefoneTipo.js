import Sequelize, { Model } from 'sequelize';

class AlunoTelefoneTipo extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        schema: 'sequelize',
        tableName: 'aluno_telefone_tipo',
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.AlunoTelefone, {
      as: 'aluno_telefone',
      foreignKey: 'tipo_id',
    });
  }
}

export default AlunoTelefoneTipo;

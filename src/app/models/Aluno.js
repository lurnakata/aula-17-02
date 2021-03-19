import Sequelize, { Model } from 'sequelize';

class Aluno extends Model {
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
        idade: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        status: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false,
          default: true,
        },
        turma_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        pcd: {
          type: Sequelize.DataTypes.BOOLEAN,
        },
        data_nascimento: {
          type: Sequelize.DataTypes.DATE,
        },

        created_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        schema: 'sequelize',
        tableName: 'aluno',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Turma, {
      as: 'turma',
      foreignKey: 'turma_id',
    });

    this.hasMany(models.AlunoNota, {
      as: 'alunos_notas',
      foreignKey: 'aluno_id',
    });

    this.hasMany(models.AlunoTelefone, {
      as: 'aluno_telefones',
      foreignKey: 'aluno_id',
    });
  }
}

export default Aluno;

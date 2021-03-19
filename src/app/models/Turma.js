import Sequelize, { Model } from 'sequelize';

class Turma extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        codigo: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        data_inicio: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        data_fim: {
          type: Sequelize.DataTypes.DATE,
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

export default Turma;

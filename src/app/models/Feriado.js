import Sequelize, { Model } from 'sequelize';

class Feriado extends Model {
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
        data: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        schema: 'sequelize',
        tableName: 'feriado',
      }
    );

    return this;
  }
}

export default Feriado;

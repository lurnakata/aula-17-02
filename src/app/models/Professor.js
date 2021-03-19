import Sequelize, { Model } from 'sequelize';

class Professor extends Model {
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
        cidade: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        uf: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        pais: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          default: 'Brasil',
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

export default Professor;

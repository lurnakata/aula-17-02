import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import Aluno from '../app/models/Aluno';
import AlunoNota from '../app/models/AlunoNota';
import AlunoTelefone from '../app/models/AlunoTelefone';
import AlunoTelefoneTipo from '../app/models/AlunoTelefoneTipo';
import Feriado from '../app/models/Feriado';
import Materia from '../app/models/Materia';
import Professor from '../app/models/Professor';
import Turma from '../app/models/Turma';
import TurmaProfessor from '../app/models/TurmaProfessor';

const models = [
  User,
  Aluno,
  AlunoNota,
  AlunoTelefone,
  AlunoTelefoneTipo,
  Feriado,
  Materia,
  Professor,
  Turma,
  TurmaProfessor,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();

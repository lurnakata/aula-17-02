import { QueryTypes } from 'sequelize';
import BaseService from './BaseService';

export default class StudentGradeService extends BaseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async get() {
    const result = await this.execute(
      'select * from aluno_nota',
      QueryTypes.SELECT
    );
    return result;
  }

  async getById(id) {
    const result = await this.execute(
      `select * from aluno_nota where id ='${id}'`,
      QueryTypes.SELECT
    );
    return result;
  }

  async create(descricao, nota, alunoId, materiaId) {
    const result = await this.execute(
      `insert into aluno_nota (descricao, nota, aluno_id, materia_id) values ('${descricao}', ${nota}, ${alunoId}, ${materiaId}) returning *`,
      QueryTypes.INSERT
    );
    return result;
  }

  async update(id, descricao, nota, alunoId, materiaId) {
    const result = await this.execute(
      `update aluno_nota set descricao = '${descricao}', nota = ${nota}, aluno_id = ${alunoId}, materia_id = ${materiaId} where id = ${id} returning *`,
      QueryTypes.UPDATE
    );
    return result;
  }

  async delete(id) {
    await this.execute(
      `delete from aluno_nota where id = ${id}`,
      QueryTypes.DELETE
    );
  }
}

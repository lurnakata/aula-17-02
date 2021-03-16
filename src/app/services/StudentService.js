import { QueryTypes } from 'sequelize';
import BaseService from './BaseService';

export default class StudentService extends BaseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async get() {
    const result = await this.execute('select * from aluno', QueryTypes.SELECT);
    return result.map(item => {
      item.nome = item.nome.trim();
      return item;
    });
  }

  async getById(id) {
    const result = await this.execute(
      `select * from aluno where id ='${id}'`,
      QueryTypes.SELECT
    );
    return result;
  }

  async create(nome, idade, turmaId, dataNascimento) {
    const result = await this.execute(
      `insert into aluno (nome, idade, turma_id, data_nascimento) values ('${nome}', ${idade}, ${turmaId}, '${dataNascimento}') returning *`,
      QueryTypes.INSERT
    );
    return result;
  }

  async update(id, nome, idade, turmaId, dataNascimento) {
    const result = await this.execute(
      `update aluno set nome = '${nome}', idade = ${idade}, turma_id = ${turmaId}, data_nascimento ='${dataNascimento}' where id = ${id} returning *`,
      QueryTypes.UPDATE
    );
    return result;
  }

  async delete(id) {
    const result = await this.execute(
      `delete from aluno where id = ${id}`,
      QueryTypes.DELETE
    );
    return result;
  }
}

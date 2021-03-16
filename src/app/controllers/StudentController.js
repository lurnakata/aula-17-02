import StudentService from '../services/StudentService';

const service = new StudentService();

class StudentController {
  async index(request, response) {
    response.json(await service.get());
  }

  async show(request, response) {
    const { id } = request.params;
    response.json(await service.getById(id));
  }

  async store(request, response) {
    const { nome, idade, turmaId, dataNascimento } = request.body;
    response.json(await service.create(nome, idade, turmaId, dataNascimento));
  }

  async update(request, response) {
    const { id } = request.params;
    const { nome, idade, turmaId, dataNascimento } = request.body;
    response.json(
      await service.update(id, nome, idade, turmaId, dataNascimento)
    );
  }

  async delete(request, response) {
    const { id } = request.params;
    response.json(await service.delete(id));
  }
}

export default new StudentController();

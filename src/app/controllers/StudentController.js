import StudentService from '../services/StudentService';
import User from '../models/User';

const service = new StudentService();

class StudentController {
  async index(request, response) {
    return response.json(await User.findAll());
    // return response.json(await service.get());
  }

  async show(request, response) {
    const { id } = request.params;
    return response.json(await service.getById(id));
  }

  async store(request, response) {
    const { nome, idade, turmaId, dataNascimento } = request.body;
    const result = await service.create(nome, idade, turmaId, dataNascimento);

    return response.json(result);
  }

  async update(request, response) {
    const { id } = request.params;
    const { nome, idade, turmaId, dataNascimento } = request.body;
    const result = await service.update(
      id,
      nome,
      idade,
      turmaId,
      dataNascimento
    );

    return response.json(result);
  }

  async delete(request, response) {
    const { id } = request.params;
    await service.delete(id);

    return response.sendStatus(202);
  }
}

export default new StudentController();

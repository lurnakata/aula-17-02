import StudentGradeService from '../services/StudentGradeService';

const service = new StudentGradeService();

class StudentGradeController {
  async index(request, response) {
    return response.json(await service.get());
  }

  async show(request, response) {
    const { id } = request.params;
    return response.json(await service.getById(id));
  }

  async store(request, response) {
    const { descricao, nota, alunoId, materiaId } = request.body;
    const result = await service.create(descricao, nota, alunoId, materiaId);

    return response.json(result);
  }

  async update(request, response) {
    const { id } = request.params;
    const { descricao, nota, alunoId, materiaId } = request.body;
    const result = await service.update(
      id,
      descricao,
      nota,
      alunoId,
      materiaId
    );

    return response.json(result);
  }

  async delete(request, response) {
    const { id } = request.params;
    await service.delete(id);

    return response.sendStatus(202);
  }
}

export default new StudentGradeController();

import { Router } from 'express';
import StudentGradeController from '../controllers/StudentGradeController';

const routes = new Router();

routes.get('/grade', StudentGradeController.index);
routes.get('/grade/:id', StudentGradeController.show);
routes.post('/grade', StudentGradeController.store);
routes.put('/grade/:id', StudentGradeController.update);
routes.delete('/grade/:id', StudentGradeController.delete);

export default routes;

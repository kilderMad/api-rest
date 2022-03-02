import { Router } from 'express';
import alunoController from '../controllers/alunoController';
import loginRequired from '../middleware/loginRequired';

const router = new Router();

router.get('/', loginRequired, alunoController.index);
router.post('/', loginRequired, alunoController.create);
router.get('/:id', loginRequired, alunoController.show);
router.delete('/:id', loginRequired, alunoController.delete);
router.put('/:id', loginRequired, alunoController.update);

export default router;

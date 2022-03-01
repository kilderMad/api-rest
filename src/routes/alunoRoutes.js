import { Router } from 'express';
import alunoController from '../controllers/alunoController';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', alunoController.create);
router.get('/:id', alunoController.show);
router.delete('/:id', alunoController.delete);
router.put('/:id', alunoController.update);

export default router;

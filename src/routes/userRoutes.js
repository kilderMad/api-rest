import { Router } from 'express';
import userController from '../controllers/userController';
import loginRequired from '../middleware/loginRequired';

const router = new Router();

// Nao deveria existir
router.get('/', userController.index);
router.get('/:id', loginRequired, userController.show);

router.post('/', userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

import { Router } from 'express';
import tokenController from '../controllers/tokenController';

const router = new Router();

router.get('/', tokenController.index);
router.post('/', tokenController.create);

export default router;

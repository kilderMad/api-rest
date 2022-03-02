import { Router } from 'express';
import fileController from '../controllers/fileController';
import loginRequired from '../middleware/loginRequired';

const router = new Router();

router.post('/', loginRequired, fileController.store);

export default router;

import express from 'express';
import progressCtrl from '../controllers/progress';

const router = express.Router();

router.get('/test', progressCtrl.test);

export default router;
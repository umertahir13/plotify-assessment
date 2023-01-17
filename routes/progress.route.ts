import express from 'express';
import progressCtrl from '../controllers/progress';

const router = express.Router();

router.post('/createTask', progressCtrl.createTask);
router.get('/getAllTasks', progressCtrl.getAllTasks);
router.post('/completeTask', progressCtrl.completeTask);
router.post('/editTask', progressCtrl.editTask);

export default router;
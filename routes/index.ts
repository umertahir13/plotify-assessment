import express from 'express';
import progressRoute from './progress.route';
const router = express.Router();

router.use('/progress', progressRoute);

export default router;
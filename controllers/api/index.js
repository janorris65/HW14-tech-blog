const router = require('express').Router();
import userRoutes from './userRoutes.js';

router.use('/users', userRoutes);

export default router;

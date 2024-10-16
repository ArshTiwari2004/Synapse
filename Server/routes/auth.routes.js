import express from 'express';
import { registerUser, loginUser } from '../controllers/user.controller.js';
import { loginLimiter } from '../middlewares/LoginLimiter.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login',loginLimiter, loginUser);



export default router;
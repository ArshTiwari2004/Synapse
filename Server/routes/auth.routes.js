import express from 'express';
import { registerUser, loginUser, googleSignIn,logoutUser } from '../controllers/user.controller.js';
import { loginLimiter } from '../middlewares/loginLimiter.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login',loginLimiter, loginUser);
router.post('/google', googleSignIn);
router.post('/logout', logoutUser);

export default router;

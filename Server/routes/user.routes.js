import express from 'express';
import auth from '../middlewares/auth.js';
import { userInfo } from '../controllers/info.controller.js';
import { addOrUpdateSocialMedia } from '../controllers/social.controller.js';

const router = express.Router();

router.get('/profile', auth, userInfo);
router.post('/socialmedia', auth, addOrUpdateSocialMedia);

export default router;
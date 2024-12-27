import express from 'express';
import { body } from 'express-validator';
import { register, login } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  body('role').isIn(['user', 'anchor']),
], register);

router.post('/login', [
  body('email').isEmail(),
  body('password').exists(),
], login);

export default router;
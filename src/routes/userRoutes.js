import express from 'express';
import userController from '../controllers/userController.js';
import authMiddleware from './../middlewares/authmiddleware';

const router = express.Router();

//GetUsers
// router.get('/', userController.getUser)

// User registration
router.post('/register', userController.registerUser);

// User login
router.post('/login', userController.loginUser);

router.get('/', authMiddleware, userController.getAllUsers)

export default router;

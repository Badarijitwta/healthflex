import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

//GetUsers
// router.get('/', userController.getUser)

// User registration
router.post('/register', userController.registerUser);

// User login
router.post('/login', userController.loginUser);

router.get('/', userController.getAllUsers)

export default router;

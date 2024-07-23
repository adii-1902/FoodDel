import express from 'express';
import { loginUser, registerUser } from '../controllers/userColtroller.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
export default userRouter;
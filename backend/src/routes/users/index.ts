import { loginController } from '../../controllers/users/post/login';
import { registerController } from '../../controllers/users/post/register';
import { urls } from '../urls';
import { Router } from 'express';

const userRouter = Router();

userRouter.post(urls.user.register, registerController);
userRouter.post(urls.user.login, loginController);

export { userRouter };

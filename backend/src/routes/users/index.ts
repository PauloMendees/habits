import { urls } from "../urls";
import { registerController } from '../../controllers/users/post/register'
import { loginController } from "../../controllers/users/post/login";
import { Router } from "express";

const userRouter = Router()

userRouter.post(urls.user.register, registerController)
userRouter.post(urls.user.login, loginController)

export { userRouter }
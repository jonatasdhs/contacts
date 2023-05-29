import { Router } from "express";
import { createUserController } from "../controllers/user/createUser.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchema } from "../schemas/user.schema";

export const userRoutes: Router = Router()

userRoutes.post('', ensureDataIsValidMiddleware(userSchema), createUserController)
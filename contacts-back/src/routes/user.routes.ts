import { Router } from "express";
import { createUserController } from "../controllers/user/createUser.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchema } from "../schemas/user.schema";
import { readUserController } from "../controllers/user/readUser.controller";

export const userRoutes: Router = Router()   

userRoutes.post('', ensureDataIsValidMiddleware(userSchema), createUserController)
userRoutes.get('/:id', readUserController)
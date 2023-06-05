import { Router } from "express";
import { createUserController } from "../controllers/user/createUser.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchema, userUpdateSchema } from "../schemas/user.schema";
import { readUserController } from "../controllers/user/readUser.controller";
import { ensureUserExistsMiddleware } from "../middlewares/ensureUserExists.middleware";
import { updateUserController } from "../controllers/user/updateUser.controller";
import { deleteUserController } from "../controllers/user/deleteUser.controller";

export const userRoutes: Router = Router()   

userRoutes.post('', ensureDataIsValidMiddleware(userSchema), createUserController)
userRoutes.get('/:id', ensureUserExistsMiddleware, readUserController)
userRoutes.patch('/:id', ensureDataIsValidMiddleware(userUpdateSchema), ensureUserExistsMiddleware, updateUserController)
userRoutes.delete('/:id', ensureUserExistsMiddleware, deleteUserController)
import { Router } from "express";
import { loginControllers } from "../controllers/login/login.controller";

export const loginRoutes: Router = Router()

loginRoutes.post('', loginControllers)
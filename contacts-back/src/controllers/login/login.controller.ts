import { Request, Response } from "express";
import { ILoginData } from "../../interfaces/login.interface";
import { loginService } from "../../services/login/login.service";

export const loginControllers = async (req: Request, res: Response): Promise<Response> => {
    const loginData: ILoginData = req.body
    console.log(req.body)

    const token = await loginService(loginData)

    return res.json({token: token})
}
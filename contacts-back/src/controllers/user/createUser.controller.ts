import { Request, Response } from "express"
import { IUserRequest } from "../../interfaces/user.interface"
import { createUserService } from "../../services/user/createUser.service"

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const userData: IUserRequest = req.body
    console.log(userData)

    const user = await createUserService(userData)

    return res.status(201).json(user)
}
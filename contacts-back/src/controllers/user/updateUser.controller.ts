import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/user.interface";
import { updateUserService } from "../../services/user/updateUser.service";

export const updateUserController = async (req: Request, res: Response):Promise<Response> => {
    const userId: number = parseInt(req.params.id)
    const newData: IUserUpdate =req.body

    const user = await updateUserService(newData, userId)

    return res.status(200).json(user)
}
import { Request, Response } from "express";
import { readUserService } from "../../services/user/readUser.service";
import { User } from "../../entities/users.entity";

export const readUserController = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = parseInt(req.params.id)

    const user = await readUserService(userId)

    return res.status(200).json(user)
}
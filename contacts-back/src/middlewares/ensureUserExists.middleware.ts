import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entity";
import { AppError } from "../errors";

export const ensureUserExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepo.findOneBy({id: parseInt(req.params.id)})

    if(!user) throw new AppError("User not found!", 404)

    next()
}
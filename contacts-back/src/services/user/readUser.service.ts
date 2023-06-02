import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/users.entity"
import { IUserReturn } from "../../interfaces/user.interface"
import { AppError } from "../../errors"
import { userReturnSchema } from "../../schemas/user.schema"

export const readUserService = async (userId: number): Promise<IUserReturn> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepo.findOne({where: {id: userId}})

    if(!user) throw new AppError("User not found!", 404)

    return userReturnSchema.parse(user)

}
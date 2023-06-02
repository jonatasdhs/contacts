import { Repository } from "typeorm";
import { IUserReturn, IUserUpdate } from "../../interfaces/user.interface";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { userReturnSchema } from "../../schemas/user.schema";

export const updateUserService = async (newData: IUserUpdate, userId: number): Promise<IUserReturn> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepo.findOneBy({id: userId})

    const newUser: User = await userRepo.save({
        ...user,
        ...newData
    })

    return userReturnSchema.parse(newUser)
}
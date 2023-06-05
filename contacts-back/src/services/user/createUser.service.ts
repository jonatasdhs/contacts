import { Repository } from "typeorm";
import { IUserRequest } from "../../interfaces/user.interface";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors";
import { userReturnSchema } from "../../schemas/user.schema";

export const createUserService = async (userData: IUserRequest) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const emailExists = await userRepository.findOne({
        where: {
            email: userData.email
        }
    })

    if(emailExists) {
        throw new AppError("User already exists!", 409)
    }

    const user: User = userRepository.create(userData)

    await userRepository.save(user)

    return userReturnSchema.parse(user)   
}
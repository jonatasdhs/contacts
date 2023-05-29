import { Repository } from "typeorm";
import { ILoginData } from "../../interfaces/login.interface";
import { User } from "../../entities/users.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { compare } from "bcryptjs";
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const loginService = async (loginData: ILoginData): Promise<any> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    
    const user: User | null = await userRepository.findOneBy({email: loginData.email})

    if(!user) throw new AppError("Invalid credentials", 401)

    const passwordValid: boolean = await compare(loginData.password, user.password)

    if(!passwordValid) throw new AppError("Invalid credentials", 401)

    const token: string = jwt.sign(
        {
            email: user.email,
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: '24h',
            subject: String(user.id)
        }
    )

    return token
}
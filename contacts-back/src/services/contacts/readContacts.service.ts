import { Repository } from "typeorm"
import { Contact } from "../../entities/contacts.entity"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/users.entity"
import { AppError } from "../../errors"

export const readContactsService = async (id: number) => {
    const contactsRepo: Repository<Contact> = AppDataSource.getRepository(Contact)
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepo.findOne({
        where: { id: id},
        relations: {
            contacts: true,
        },

    })

    if(!user) throw new AppError("User not found!", 404)

    return user

}
import { Repository } from "typeorm"
import { Contact } from "../../entities/contacts.entity"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/users.entity"
import { AppError } from "../../errors"
import { contactsManySchema } from "../../schemas/contacts.schema"

export const readContactsService = async (userId: number) => {
    const contactsRepo: Repository<Contact> = AppDataSource.getRepository(Contact)
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    /* const user: User[] | null = await userRepo.createQueryBuilder("users")
    .leftJoinAndSelect("users.contacts", "contacts", "users.id = :userId", {userId})
    .getMany() */

    const contacts: Contact[] | null = await contactsRepo.createQueryBuilder("contacts")
    .where("contacts.userId = :userId", {userId})
    .getMany()

    return contacts /* contactsManySchema.parse(contacts) */
}
import { Repository } from "typeorm";
import { Contact } from "../../entities/contacts.entity";
import { IContactsRequest, IContactsResponse } from "../../interfaces/contacts.interface";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors";

export const createContactsService = async (contactsData: IContactsRequest, userId: number) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const user: User | null = await userRepository.findOneBy({id: userId})
    if(!user) throw new AppError("User not found!", 404)


    const contact: Contact = contactRepository.create({...contactsData, user: user})

    await contactRepository.save(contact)

    return contact
}
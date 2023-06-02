import { Repository } from "typeorm";
import { IContactsUpdate } from "../../interfaces/contacts.interface";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";

export const updateContactsService = async (id: number, newData: IContactsUpdate): Promise<Contact> => {
    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact: Contact | null = await contactRepo.findOneBy({id: id})

    const newContact: Contact = await contactRepo.save({
        ...contact,
        ...newData
    })

    return newContact
}
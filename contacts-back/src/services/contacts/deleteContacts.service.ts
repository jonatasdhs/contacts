import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contacts.entity"

export const deleteContactsService = async (id: number): Promise<void> => {
    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact: Contact | null = await contactRepo.findOneBy({id})

    await contactRepo.remove(contact!)
}
import { CreateContactDto } from "../dto/create-contact.dto";
import { Contact } from "../entities/contact.entity";

export abstract class ContactsRepository {
    abstract create(data: CreateContactDto): Promise<Contact> | Contact;
    abstract findAll(): Promise<Contact[]> | Contact[];
    abstract findOne(id: string): Promise<Contact> | Contact;
}
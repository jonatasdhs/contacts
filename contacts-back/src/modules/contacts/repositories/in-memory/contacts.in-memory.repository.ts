import { Injectable } from "@nestjs/common";
import { CreateContactDto } from "../../dto/create-contact.dto";
import { Contact } from "../../entities/contact.entity";
import { ContactsRepository } from "../contact.repository";
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ContactsInMemoryRepository implements ContactsRepository {
    private database: Contact[] = []
    create(data: CreateContactDto): Contact | Promise<Contact> {
        const newContact = new Contact()
        Object.assign(newContact, {
            ...data
        })
        this.database.push(newContact)
        return newContact
    }

    findAll(): Contact[] | Promise<Contact[]> {
        return plainToInstance(Contact, this.database)
    }

    findOne(id: string): Contact | Promise<Contact> {
        const contact = this.database.find((contact) => contact.id === id);
        return plainToInstance(Contact, contact);
    }
}
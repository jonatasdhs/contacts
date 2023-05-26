import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactsRepository } from './repositories/contact.repository';

@Injectable()
export class ContactsService {
    constructor(private contactsRepository: ContactsRepository) {}
    async create(CreateContactDto: CreateContactDto) {
        const contact = await this.contactsRepository.create(CreateContactDto)
        return contact
    }

    async findAll()  {
        const contacts = await this.contactsRepository.findAll()
        return contacts
    }

    async findOne(id: string) {
        const contact = await this.contactsRepository.findOne(id)
        return contact
    }
}

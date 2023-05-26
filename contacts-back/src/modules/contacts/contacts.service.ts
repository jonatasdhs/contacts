import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactsService {
    constructor() {}
    create(CreateContactDto: CreateContactDto) {

    }

    findAll() {
        
    }
}
